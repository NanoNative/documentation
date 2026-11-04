import Link from "next/link";
import coverImage from "./assets/cover.svg";
import type { BlogPost } from "../types";

// Nano text.link on a light reading surface.
const linkStyle = "text-nanoTextLink underline underline-offset-2 hover:text-blue-800";
const codeBlockStyle = "max-h-80 overflow-auto";
const tableStyle =
    "w-full border-collapse text-left text-sm leading-6 [&_th]:border-b [&_th]:border-gray-300 [&_th]:bg-gray-50 [&_th]:p-3 [&_th]:font-semibold [&_th]:text-gray-950 [&_td]:border-b [&_td]:border-gray-200 [&_td]:p-3 [&_td]:align-top";

const post: BlogPost = {
    slug: "what-happens-after-you-send-an-event-in-nano",
    title: "What Happens After You Send an Event in Nano?",
    description:
        "Follow an order-status request from its HTTP handler to the Nano event reply and see when async dispatch makes sense.",
    date: "2026-10-29",
    author: "NanoNative Team",
    tags: ["Nano", "Events", "Native Java"],
    readingTime: "5 min read",
    coverImage,
    coverAlt: "Nano dispatch diagram showing event metadata, acknowledgment stopping propagation and caller-thread versus asynchronous virtual-thread execution",
    content: (
        <>
            <p>
                Say we&apos;re building an endpoint that returns an order&apos;s status. The HTTP handler passes the
                lookup to <code>OrderService</code> through an event and uses its reply. Let&apos;s follow that request
                from <code>send()</code> to the response, then see where async dispatch and other listeners fit.
            </p>

            <h2>A service and its event channels</h2>
            <p>
                <code>OrderService</code> keeps order statuses in a map. It handles two kinds of request: look up
                an order&apos;s status or replace it. Each has a typed channel and a reply:
            </p>
            <pre className={codeBlockStyle} tabIndex={0} role="region" aria-label="OrderService Java source">
                <code className="language-java">{`import berlin.yuna.typemap.model.TypeMapI;
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
}`}</code>
            </pre>

            <p>
                The <code>containsEvent()</code> check needs a little explanation. Our requests carry records such
                as <code>OrderLookup</code> but a Nano failure report wraps the event that failed. The{" "}
                <a href="https://github.com/NanoNative/nano/blob/3792281e665da39ecef574a03f38f1f7bfb04734/src/main/java/org/nanonative/nano/helper/event/model/Event.java#L62-L65" className={linkStyle}>
                    <code>event.channel(EVENT_ORDER_LOOKUP)</code>
                </a>{" "}
                call gives us a typed event and it can also find a matching event inside a failure report.
                We skip those reports here so a failed write doesn&apos;t accidentally run again. Error handlers
                can deal with the failure separately.
            </p>
            <p>
                Next, we register our HTTP handlers:
            </p>
            <pre className={codeBlockStyle} tabIndex={0} role="region" aria-label="Application startup">
                <code className="language-java">{`new Nano(new OrderService())
    .context(OrderController.class)
    .subscribeEvent(HttpServer.EVENT_HTTP_REQUEST, OrderController::getOrder)
    .subscribeEvent(HttpServer.EVENT_HTTP_REQUEST, OrderController::putStatus)
    .runAwait(new HttpServer());`}</code>
            </pre>

            <p>
                Both HTTP handlers receive request events so each checks the method and path before doing any work.
                Here&apos;s the GET handler:
            </p>
            <pre className={codeBlockStyle} tabIndex={0} role="region" aria-label="HTTP lookup handler">
                <code className="language-java">{`public static void getOrder(final Event<HttpObject, HttpObject> httpEvent) {
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
}`}</code>
            </pre>

            <p>
                Download the{" "}
                <Link href="/examples/nano-order-events.zip" download prefetch={false} className={linkStyle}>
                    runnable example
                </Link>{" "}
                (Nano 2026.10.10, Java 21+) and run <code>mvn compile exec:java</code> from its directory.
                The store starts empty. Send a PUT to add a status, then GET the same order. Check the startup
                log for the port; it&apos;s normally 8080:
            </p>
            <pre className={codeBlockStyle} tabIndex={0} role="region" aria-label="Sample HTTP requests">
                <code className="language-shell">{`curl -i -X PUT http://localhost:8080/orders/purchase-1001/status \\
  -H 'Content-Type: text/plain' --data 'PROCESSING'

curl -i http://localhost:8080/orders/purchase-1001`}</code>
            </pre>

            <p>
                The PUT handler sends an <code>OrderStatusPut</code> event. Repeating the same PUT leaves the order
                with the same status. For this example, any valid status label is accepted and the data is lost
                when the process stops. Persistence and rules about allowed status changes would need more work.
            </p>

            <h2>Static handlers or services?</h2>
            <p>
                The HTTP handlers read a request, send an event and write a response. They have nothing to
                initialize or close so static subscriptions work well here. Keep validation in the handler
                that performs the write: subscribers have no guaranteed order so registering a validator
                separately won&apos;t ensure it runs first.
            </p>
            <p>
                The map needs to survive between requests so it belongs to <code>OrderService</code>. A database
                pool would fit the same pattern: open it in <code>start</code>, close it in <code>stop</code>.
                Nano calls <code>onEvent</code> only while the service is ready. If an HTTP module later needs
                its own cache or configuration, it can become a service too.
            </p>
            <p>
                There&apos;s one lifecycle detail to watch: direct subscriptions stay registered until you remove
                them. If you subscribe in <code>start</code>, keep the listener references and unsubscribe in{" "}
                <code>stop</code>. Otherwise a callback could try to use a resource you&apos;ve already closed.
                Exceptions from these listeners go straight to <code>EVENT_APP_ERROR</code>, bypassing{" "}
                <code>Service.onFailure</code>.
            </p>
            <p>
                We also pass request data into static helpers, following Nano&apos;s{" "}
                <a href="https://github.com/NanoNative/nano/blob/3792281e665da39ecef574a03f38f1f7bfb04734/README.md" className={linkStyle}>
                    recommendation
                </a>. This makes it easier to see what each helper uses and keeps request data out of service fields.
                As with instance methods, a local variable can still refer to a shared object. Every request here
                uses the same map so we use <code>ConcurrentHashMap</code> for concurrent reads and writes.
                Making a method <code>static</code> doesn&apos;t make that shared data thread-safe.
            </p>

            <h2>What happens during send()?</h2>
            <p>
                The GET handler reads <code>lookup.response()</code> right after <code>send()</code>. That works
                because dispatch is synchronous by default: the handlers run on the caller&apos;s thread and{" "}
                <code>send()</code> returns when dispatch finishes. If the lookup takes 200 ms, the HTTP request&apos;s
                virtual thread spends that time doing or waiting for the lookup.
            </p>
            <p>
                Nano calls direct listeners first, then ready services. A call to <code>respond(value)</code>{" "}
                sets the reply and acknowledges the event, which stops dispatch unless broadcasting is enabled.
                Since listener order isn&apos;t guaranteed, give a lookup one responder. Calling{" "}
                <code>acknowledge()</code> on its own stops dispatch without supplying an answer.
            </p>
            <p>
                This timing matters for HTTP. <code>HttpServer</code> checks for a response as soon as HTTP-event
                dispatch returns. If we move the reply into an async callback, the server could check before the
                reply exists. Keeping this lookup synchronous lets the handler finish its response in time.
            </p>

            <h2>Tracing a request</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className={tableStyle}>
                    <caption className="sr-only">Identity and lifecycle information available on a Nano event</caption>
                    <thead>
                        <tr>
                            <th scope="col">Field or method</th>
                            <th scope="col">Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>channel().id()</code></td>
                            <td>The operation, shared across events.</td>
                        </tr>
                        <tr>
                            <td><code>context().traceId()</code></td>
                            <td>The attached context&apos;s ID.</td>
                        </tr>
                        <tr>
                            <td><code>context().traceIds()</code></td>
                            <td>Context ID and ancestry.</td>
                        </tr>
                        <tr>
                            <td><code>createdAt</code></td>
                            <td>Monotonic construction time (<code>System.nanoTime()</code>).</td>
                        </tr>
                        <tr>
                            <td><code>isAcknowledged()</code>, <code>response()</code>, <code>error()</code></td>
                            <td>Current handling state, result and failure.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                Events using the same context share a trace ID. Our controller creates a child context for each
                request so we can follow the lookup back to its HTTP request. Channel IDs are assigned at
                registration so use channel names when comparing logs across restarts. If you also need to tell
                individual events apart within one context, add your own ID:
            </p>
            <pre className={codeBlockStyle} tabIndex={0} role="region" aria-label="Event tracking Java example">
                <code className="language-java">{`final var lookup = work
    .newEvent(OrderService.EVENT_ORDER_LOOKUP,
        () -> new OrderService.OrderLookup(orderId))
    .putR("eventId", UUID.randomUUID().toString());

lookup.send();

final long elapsedNs = System.nanoTime()
    - lookup.asLongOpt("createdAt").orElseThrow();

work.info(() -> "event={} channel={} trace={} handled={} elapsedNs={}",
    lookup.asString("eventId"),
    lookup.channel().name(),
    lookup.context().traceId(),
    lookup.isAcknowledged(),
    elapsedNs);`}</code>
            </pre>

            <p>
                Here, <code>eventId</code> is our own field. The elapsed time starts when the event was created
                so it includes the time before and during dispatch.
            </p>

            <h2>When the caller can wait for a future</h2>
            <p>
                A scheduled job may be able to do other work while a lookup runs. For that caller, we can wrap
                Nano&apos;s response callback in a future:
            </p>
            <pre className={codeBlockStyle} tabIndex={0} role="region" aria-label="Asynchronous lookup returning a future">
                <code className="language-java">{`public static CompletableFuture<OrderService.OrderResult> lookupAsync(
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
}`}</code>
            </pre>
            <p>
                The caller can use <code>thenApply</code> or <code>thenCompose</code> to work with the result.
                We add a timeout because an event might never receive a reply. A missing order still completes
                normally, with a null status. If a handler calls <code>acknowledge()</code> without a result, the
                callback receives null and our helper fails the future. If no callback arrives, the future times
                out. That timeout doesn&apos;t cancel dispatch.
            </p>
            <h2>Letting other listeners know</h2>
            <p>
                Suppose we want to record metrics whenever an order status is read. We already have the lookup
                result so we can send a separate notification for interested listeners. Declare a channel
                on <code>OrderController</code>:
            </p>
            <pre className={codeBlockStyle} tabIndex={0} role="region" aria-label="Notification channel declaration">
                <code className="language-java">{`public static final Channel<OrderService.OrderResult, Void> EVENT_ORDER_STATUS_READ =
    Channel.registerChannelId(
        "ORDER_STATUS_READ", OrderService.OrderResult.class, Void.class);`}</code>
            </pre>

            <p>
                Then send it from the GET handler&apos;s successful-response branch:
            </p>
            <pre className={codeBlockStyle} tabIndex={0} role="region" aria-label="Broadcast Java example">
                <code className="language-java">{`work.newEvent(EVENT_ORDER_STATUS_READ, () -> result)
    .broadcast(true)
    .async(true)
    .send();`}</code>
            </pre>

            <p>
                <code>broadcast(true)</code> lets dispatch continue even if a listener acknowledges the event.
                With <code>async(true)</code>, dispatch runs on another virtual thread while HTTP continues.
                The listeners still run one after another and receive the same event. Our result record is
                immutable so each sees the same status snapshot. Nano doesn&apos;t collect their replies or persist
                the notification. For an audit that must survive a crash, you&apos;d need to store it.
            </p>

            <h2>When a handler fails</h2>
            <p>
                So far, <code>OrderService.onFailure</code> returns null, which forwards exceptions to the
                application&apos;s error handlers. To handle a lookup failure inside the service, we can use the
                original event and its <code>error()</code>:
            </p>
            <pre className={codeBlockStyle} tabIndex={0} role="region" aria-label="Service failure handler">
                <code className="language-java">{`@Override
public Object onFailure(final Event<?, ?> failed) {
    return failed.channel(EVENT_ORDER_LOOKUP)
        .map(lookup -> {
            lookup.context().error(lookup.error(),
                () -> "Order lookup failed; trace={}",
                lookup.context().traceId());
            lookup.acknowledge();
            return Boolean.TRUE;
        })
        .orElse(null);
}`}</code>
            </pre>

            <p>
                Returning <code>Boolean.TRUE</code> tells Nano we&apos;ve handled the failure. To send a result back
                to the caller, we would need to call <code>respond(result)</code> on the lookup event. Here we only
                acknowledge it so there&apos;s no result and our HTTP handler returns 500. That&apos;s different from
                an unknown order: a successful lookup returns an <code>OrderResult</code> with a null status,
                which the HTTP handler turns into 404.
            </p>

            <h2>Using the lookup outside HTTP</h2>
            <p>
                A scheduled job can send the same <code>OrderLookup</code> as the HTTP handler. If we later replace
                the map with a database, both callers can keep sending that request and reading an{" "}
                <code>OrderResult</code>. The storage work stays in <code>OrderService</code>.
            </p>
        </>
    ),
};

export default post;
