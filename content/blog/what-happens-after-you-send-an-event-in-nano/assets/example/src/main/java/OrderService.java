import berlin.yuna.typemap.model.TypeMapI;
import org.nanonative.nano.core.model.Service;
import org.nanonative.nano.helper.event.model.Channel;
import org.nanonative.nano.helper.event.model.Event;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

public final class OrderService extends Service {
    public record OrderLookup(String orderId) {}
    public record OrderStatusPut(String orderId, String status) {}
    public record OrderResult(String orderId, String status) {}
    public record OrderStatusWritten(String orderId, String status, boolean created) {}

    public static final Channel<OrderLookup, OrderResult> EVENT_ORDER_LOOKUP =
        Channel.registerChannelId(
            "ORDER_LOOKUP", OrderLookup.class, OrderResult.class);
    public static final Channel<OrderStatusPut, OrderStatusWritten> EVENT_ORDER_STATUS_PUT =
        Channel.registerChannelId(
            "ORDER_STATUS_PUT", OrderStatusPut.class, OrderStatusWritten.class);

    private final ConcurrentMap<String, String> statuses = new ConcurrentHashMap<>();

    @Override
    public void onEvent(final Event<?, ?> event) {
        if (event.containsEvent()) {
            return;
        }
        event.channel(EVENT_ORDER_LOOKUP)
            .ifPresent(lookup -> lookupOrder(lookup, statuses));
        event.channel(EVENT_ORDER_STATUS_PUT)
            .ifPresent(update -> putStatus(update, statuses));
    }

    private static void lookupOrder(
            final Event<OrderLookup, OrderResult> event,
            final ConcurrentMap<String, String> statuses) {
        final String orderId = event.payload().orderId();
        event.respond(new OrderResult(orderId, statuses.get(orderId)));
    }

    private static void putStatus(
            final Event<OrderStatusPut, OrderStatusWritten> event,
            final ConcurrentMap<String, String> statuses) {
        final OrderStatusPut update = event.payload();
        final boolean created = statuses.put(update.orderId(), update.status()) == null;
        event.respond(new OrderStatusWritten(update.orderId(), update.status(), created));
    }

    @Override public void start() {}
    @Override public void stop() { statuses.clear(); }
    @Override public void configure(final TypeMapI<?> changes, final TypeMapI<?> merged) {}
    @Override public Object onFailure(final Event<?, ?> failed) { return null; }
}
