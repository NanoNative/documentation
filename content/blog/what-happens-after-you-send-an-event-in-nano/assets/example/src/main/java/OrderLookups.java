import org.nanonative.nano.core.model.Context;

import java.time.Duration;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;

public final class OrderLookups {
    private OrderLookups() {}

    public static CompletableFuture<OrderService.OrderResult> lookupAsync(
            final Context work, final String orderId, final Duration timeout) {
        if (timeout.isZero() || timeout.isNegative()) {
            throw new IllegalArgumentException("timeout must be positive");
        }
        final var response = new CompletableFuture<OrderService.OrderResult>();
        response.orTimeout(timeout.toNanos(), TimeUnit.NANOSECONDS);

        work.newEvent(OrderService.EVENT_ORDER_LOOKUP,
                () -> new OrderService.OrderLookup(orderId))
            .async(reply -> {
                if (reply == null) {
                    response.completeExceptionally(
                        new IllegalStateException("Lookup acknowledged without a result"));
                } else {
                    response.complete(reply);
                }
            })
            .send();

        return response;
    }
}
