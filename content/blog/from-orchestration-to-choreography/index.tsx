import coverImage from "./assets/cover.svg";
import type { BlogPost } from "../types";

const post: BlogPost = {
    slug: "from-orchestration-to-choreography",
    title: "From Orchestration To Choreography",
    description:
        "Nano services act as connectors that let application behavior move through explicit events instead of one central orchestrator.",
    date: "2026-09-18",
    author: "NanoNative Team",
    tags: ["Nano", "Services", "Architecture"],
    readingTime: "5 min read",
    coverImage,
    coverAlt: "Nano runtime connected to HTTP, metrics, logs and file watching services",
    content: (
        <>
            <p>
                The word service is overloaded in Java. In many applications it means business logic. In others, it
                describes technical capabilities. In Nano, a service is closer to a connector: it connects the runtime to
                HTTP, logging, metrics, files, databases, observability tools or anything else the application needs to
                talk to.
            </p>

            <p>
                That distinction matters because it keeps the runtime explicit. A service is added when the application
                needs the capability. If an app needs HTTP and metrics, it starts those services. If it only needs events
                and a small amount of internal logic, it does not pay during runtime for everything else just because it 
                exists on the classpath.
            </p>

            <p>
                The connector idea is what makes Nano feel different from a controller-first framework. A request,
                a configuration change, an error, a metric update and a service reply can all move through the same
                runtime vocabulary. Services subscribe to the events they understand, translate them into concrete work and
                publish the next signal when another part of the application should continue.
            </p>

            <h2>Startup Is The Runtime Contract</h2>
            <p>
                A Nano application tells you a lot about itself at startup. The services passed to <code>Nano</code> are
                the runtime surface area. That is different from a classpath-scanning model where the application shape
                is discovered by searching for annotations across all dependencies.
            </p>

            <pre>
                <code>{`final Nano nano = new Nano(
    new HttpServer(),
    new MetricService(),
    new LogService()
);`}</code>
            </pre>

            <p>
                You can read this and know what the process is trying to do. It works with HTTP events, metric events and
                logging events. There may be other classes behind those services but the application boundary stays clear
                only when each service remains responsible for the capability it owns.
            </p>

            <h2>Connectors Keep Boundaries Honest</h2>
            <p>
                A connector (service) should know how to talk to a capability. It should not slowly absorb unrelated domain
                behavior. For example, an HTTP-facing service can translate an incoming request into an application event.
                A domain class can decide whether that request is valid. In real code, app-specific events like <code>EVENT_ORDER_ACCEPTED</code>
                should be registered as typed channel constants.
            </p>

            <pre>
                <code>{`public final class OrderApiService implements Service {
    private final OrderPolicy policy;

    public OrderApiService(final OrderPolicy policy) {
        this.policy = policy;
    }

    @Override
    public void start(final Context context) {
        context.subscribeEvent(EVENT_HTTP_REQUEST, event -> event.payloadOpt()
            .filter(HttpObject::isMethodPost)
            .filter(request -> request.pathMatch("/orders"))
            .map(this::readOrder)
            .map(policy::validate)
            .ifPresent(order -> context.newEvent(EVENT_ORDER_ACCEPTED, () -> order).send()));
    }
}`}</code>
            </pre>

            <p>
                The service owns HTTP and event translation. <code>OrderPolicy</code> owns the decision. That means the
                policy can be tested without Nano, without HTTP and without a running server.
            </p>

            <h2>HTTP Is Just One Event Source</h2>
            <p>
                When <code>HttpServer</code> receives a request, Nano publishes it on the HTTP request channel. A service
                can subscribe to that channel, inspect the request and decide whether it owns the path. The request does
                not need to be converted into a controller method before the application can handle it.
            </p>

            <pre>
                <code>{`context.subscribeEvent(EVENT_HTTP_REQUEST, event -> event.payloadOpt()
    .filter(HttpObject::isMethodGet)
    .filter(request -> request.pathMatch("/orders"))
    .ifPresent(request -> request.createResponse()
        .body(orderView.loadOpenOrders())
        .respond(event)));`}</code>
            </pre>

            <p>
                The boundary is visible. HTTP is a connector into the runtime, not the whole application model. The same
                service listens to all events of the same type but chooses which ones to serve.
            </p>

            <h2>Services React To The Runtime</h2>
            <p>
                A Nano service is still a class. It can subscribe to channels, publish events and react to configuration
                changes.
            </p>

            <pre>
                <code>{`public final class AuditService implements Service {
    @Override
    public void start(final Context context) {
        context.subscribeEvent(EVENT_ORDER_CREATED, (event, order) ->
            context.newEvent(EVENT_AUDIT_WRITE, () -> order).send());
    }
}`}</code>
            </pre>


            <h2>Non-Blocking Does Not Remove Design Work</h2>
            <p>
                Nano can keep the runtime responsive because services communicate through events and the runtime can use
                modern Java concurrency primitives underneath. That does not mean application code becomes concurrent by
                accident. Each service still needs to be written as code that can safely run while other services are
                doing their own work.
            </p>

            <p>
                The practical rule is to avoid hidden shared state. A subscriber should treat the event payload as the
                input for one unit of work. If it needs mutable state, that state should have a clear owner. If it needs
                to call a slow dependency, the service should make that boundary obvious and publish a result event when
                the slow work completes.
            </p>

            <pre>
                <code>{`public final class OrderLookupService implements Service {
    private final OrderRepository repository;

    public OrderLookupService(final OrderRepository repository) {
        this.repository = repository;
    }

    @Override
    public void start(final Context context) {
        context.subscribeEvent(EVENT_ORDER_LOOKUP_REQUESTED, event -> event.payloadOpt()
            .map(repository::findById)
            .ifPresent(order -> context.newEvent(EVENT_ORDER_LOOKUP_COMPLETED, () -> order).send()));
    }
}`}</code>
            </pre>

            <p>
                The service has one job: connect a lookup request to the repository and publish the result. It does not
                store the current order in a field. It does not rely on the next request arriving after the previous one
                has finished. That shape is boring in the best way because it survives concurrency.
            </p>

            <h2>Async Flow Still Needs Clear Replies</h2>
            <p>
                Events help because not all work belongs on the direct request path. A request can validate input,
                enqueue background work and return an accepted response. Another service can listen for that work, call a
                database or external system and publish a completion event later.
            </p>

            <p>
                The point is not to make every small operation asynchronous just because events exist. If the caller needs
                a direct response, keep that path direct. If the work should continue later, publish an event named as a
                fact that happened, such as <code>order.created</code> or <code>invoice.email.requested</code>. That keeps
                the system readable when there are many subscribers.
            </p>

            <h2>Services Can Be Small On Purpose</h2>
            <p>
                A common failure mode in service-style code is the all-purpose service. It handles transport, validation,
                persistence, logging, retries and metrics. That looks convenient until the class becomes the only place
                where behavior can be changed.
            </p>

            <p>
                Nano does not force a particular layering style but explicit services make smaller boundaries natural.
                One service can connect to HTTP. Another can watch files. Another can expose local observability. Those
                services can communicate through events and each one can be removed from startup when it is not needed.
            </p>

            <p>
                Smaller services also help when tuning runtime behavior. A service that accepts traffic can be measured
                separately from a service that writes audit records. A service that calls an external system can own its
                retry and timeout behavior without spreading those details through the HTTP layer. The event boundary
                makes those decisions explicit.
            </p>

            <h2>Business Logic Should Stay Portable</h2>
            <p>
                The connector idea discourages putting every rule inside a runtime service. A pricing rule, validation
                rule or domain calculation should be testable without starting HTTP, metrics
                or a file watcher. The service can translate events into calls to those plain classes.
            </p>

            <pre>
                <code>{`public final class OrderService implements Service {
    private final OrderPolicy policy;

    public OrderService(final OrderPolicy policy) {
        this.policy = policy;
    }

    @Override
    public void start(final Context context) {
        context.subscribeEvent(EVENT_ORDER_REQUESTED, event -> event.payloadOpt()
            .map(policy::approve)
            .ifPresent(result -> context.newEvent(EVENT_ORDER_REVIEWED, () -> result).send()));
    }
}`}</code>
            </pre>

            <p>
                That shape keeps the runtime integration thin and the business rules portable. The Nano service connects
                to the event system. The plain Java class decides.
            </p>

            <h2>Why This Matters For Tests</h2>
            <p>
                Explicit services make tests smaller. A test for HTTP behavior can start <code>HttpServer</code> and the
                service under test. A test for domain behavior can skip Nano entirely and test the plain Java class.
                When the runtime is explicit, tests do not inherit half the application by accident.
            </p>

            <pre>
                <code>{`final Nano testApp = new Nano(
    Map.of(CONFIG_LOG_LEVEL, TEST_LOG_LEVEL),
    new HttpServer(),
    new OrderApiService(new OrderPolicy())
);`}</code>
            </pre>

            <p>
                The test does not need to boot a full container. It does not need to accept unrelated auto-configuration.
                The services in the constructor are the services in the test.
            </p>

            <h2>Debugging Starts With The Channel</h2>
            <p>
                The debugging loop changes too. Instead of asking which annotation registered a method, start with the
                channel. Was an event published? Did a subscriber match it? Did the payload have the expected type? Did
                the service respond on the same event or publish a follow-up event?
            </p>

            <p>
                That sequence prevents a lot of guessing. A connector service has a visible subscription and a visible
                output. When something does not run, there are fewer hidden framework paths to inspect.
            </p>

            <h2>Nano Services Are Connectors</h2>
            <p>
                A lot of older service design grew around orchestration. One central layer knew the whole workflow,
                called each dependency in order and became responsible for every branch in the system. That can work for
                simple request-response applications but it becomes fragile as more capabilities are added.
            </p>

            <p>
                Nano points in the other direction. Services publish and react to events. HTTP, metrics, logs,
                configuration, developer tools and application behavior can each connect to the runtime without requiring
                one object to orchestrate everything. The flow is choreographed through explicit event names and service
                subscriptions.
            </p>

            <p>
                As NanoNative grows beyond one framework artifact, new capabilities can join the ecosystem as services
                that listen, publish and expose their own boundary. Nano stays small at the center while the surrounding
                tools cooperate through the runtime model.
            </p>
        </>
    ),
};

export default post;
