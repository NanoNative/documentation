import org.nanonative.nano.core.model.Context;
import org.nanonative.nano.helper.event.model.Event;
import org.nanonative.nano.services.http.model.HttpObject;

import java.util.Map;

public final class OrderController {
    private OrderController() {}

    public static void getOrder(final Event<HttpObject, HttpObject> httpEvent) {
        final HttpObject request = httpEvent.payload();
        if (!request.isMethodGet()
                || !request.path().matches("/orders/[^/]+")
                || !request.pathMatch("/orders/{orderId}")) {
            return;
        }

        final String orderId = request.pathParam("orderId");
        final Context work = httpEvent.context().newContext(OrderController.class);
        final var lookup = work.newEvent(OrderService.EVENT_ORDER_LOOKUP,
            () -> new OrderService.OrderLookup(orderId));

        lookup.send();
        final OrderService.OrderResult result = lookup.response();

        if (result == null) {
            request.createResponse().statusCode(500)
                .body("Order lookup did not respond").respond(httpEvent);
        } else if (result.status() == null) {
            request.createResponse().statusCode(404)
                .body("Order not found").respond(httpEvent);
        } else {
            request.createResponse().statusCode(200)
                .body(Map.of("orderId", result.orderId(),
                             "status", result.status()))
                .respond(httpEvent);
        }
    }

    /** Demo data input, with no order-creation or business transition rules. */
    public static void putStatus(final Event<HttpObject, HttpObject> httpEvent) {
        final HttpObject request = httpEvent.payload();
        if (!request.isMethodPut()
                || !request.path().matches("/orders/[^/]+/status")
                || !request.pathMatch("/orders/{orderId}/status")) {
            return;
        }

        final String orderId = request.pathParam("orderId");
        final String status = request.bodyAsString().strip();
        if (!status.matches("[A-Z][A-Z_]{0,31}")) {
            request.createResponse().statusCode(400)
                .body("Status must contain 1 to 32 uppercase letters or underscores, starting with a letter")
                .respond(httpEvent);
            return;
        }

        final Context work = httpEvent.context().newContext(OrderController.class);
        final var put = work.newEvent(OrderService.EVENT_ORDER_STATUS_PUT,
            () -> new OrderService.OrderStatusPut(orderId, status));
        put.send();
        final OrderService.OrderStatusWritten result = put.response();

        if (result == null) {
            request.createResponse().statusCode(500)
                .body("Order status update did not respond").respond(httpEvent);
        } else {
            request.createResponse().statusCode(result.created() ? 201 : 200)
                .body(Map.of("orderId", result.orderId(), "status", result.status()))
                .respond(httpEvent);
        }
    }
}
