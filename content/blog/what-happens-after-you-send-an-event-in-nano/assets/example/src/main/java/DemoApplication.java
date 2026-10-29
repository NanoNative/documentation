import org.nanonative.nano.core.Nano;
import org.nanonative.nano.services.http.HttpServer;

public final class DemoApplication {
    public static void main(final String[] args) {
        new Nano(new OrderService())
            .context(OrderController.class)
            .subscribeEvent(HttpServer.EVENT_HTTP_REQUEST, OrderController::getOrder)
            .subscribeEvent(HttpServer.EVENT_HTTP_REQUEST, OrderController::putStatus)
            .runAwait(new HttpServer());
    }
}
