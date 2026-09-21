import coverImage from "./assets/cover.svg";
import type { BlogPost } from "../types";

const post: BlogPost = {
    slug: "nano-services-are-connectors",
    title: "Nano Services Are Connectors",
    description:
        "A Nano service connects the runtime to a capability such as HTTP, logs, metrics, files, databases or tools.",
    date: "2026-09-19",
    author: "NanoNative Team",
    tags: ["Nano", "Services", "Architecture"],
    readingTime: "5 min read",
    coverImage,
    coverAlt: "Nano runtime connected to HTTP, metrics, logs and file watching services",
    content: (
        <>
            <p>
                The word service is overloaded in Java. In many applications it means business logic. In Nano, a service
                is closer to a connector. It connects the Nano runtime to HTTP, logging, metrics, files, databases,
                observability tools or anything else the application needs to talk to.
            </p>

            <p>
                That distinction matters because it keeps the runtime explicit. A service is added when the application
                needs the capability. If an app needs HTTP and metrics, it starts those services. If it only needs events
                and a small amount of internal logic, it does not pay for everything else just because it exists on the
                classpath.
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
                logging events. There may be other classes behind those services but the application boundary
                is visible.
            </p>

            <h2>Connectors Keep Boundaries Honest</h2>
            <p>
                A connector (service) should know how to talk to a capability. It should not slowly absorb unrelated domain
                behavior. For example, an HTTP-facing service can translate an incoming request into an application event.
                A domain class can decide whether that request is valid.
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
            .ifPresent(order -> context.sendEvent("order.accepted", order)));
    }
}`}</code>
            </pre>

            <p>
                The service owns HTTP and event translation. <code>OrderPolicy</code> owns the decision. That means the
                policy can be tested without Nano, without HTTP and without a running server.
            </p>

            <h2>Services React To The Runtime</h2>
            <p>
                A Nano service is still a class. It can subscribe to channels, publish events and react to configuration
                changes. A service should usually own integration work: accepting HTTP traffic, sending HTTP traffic,
                collecting metrics, writing logs, watching files or exposing a developer tool.
            </p>

            <pre>
                <code>{`public final class AuditService implements Service {
    @Override
    public void start(final Context context) {
        context.subscribeEvent("order.created", event -> event.payloadOpt()
            .ifPresent(order -> context.sendEvent("audit.write", order)));
    }
}`}</code>
            </pre>

            <p>
                The example is intentionally small. The service is not special because of an annotation. It is special
                because the application starts it and the service registers the event work it owns.
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

            <h2>Business Logic Should Stay Portable</h2>
            <p>
                The connector idea is useful because it discourages putting every rule inside a runtime service. A
                pricing rule, validation rule or domain calculation should be easy to test without starting HTTP, metrics
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
        context.subscribeEvent("order.requested", event -> event.payloadOpt()
            .map(policy::approve)
            .ifPresent(result -> context.sendEvent("order.reviewed", result)));
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

            <h2>Why This Matters For NanoNative</h2>
            <p>
                NanoNative is growing beyond one framework artifact. There is Nano itself, Developer Console, supporting
                services and adjacent tooling. Treating services as connectors gives the ecosystem a clean way to grow.
                New capabilities can be introduced as services without changing the core mental model.
            </p>

            <p>
                That is the part worth preserving as the project grows: Nano should remain small at the center while
                additional tools connect to it deliberately.
            </p>

            <h2>What To Watch</h2>
            <p>
                It is still possible to create one giant service that handles HTTP, database access, validation, metrics
                and retries. Nano will not stop you from doing that. A useful rule is simple: if the code connects Nano to
                an external capability, it belongs in a service. If the code decides what the business should do, keep it
                separate and let events carry the interaction.
            </p>
        </>
    ),
};

export default post;
