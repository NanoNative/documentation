import coverImage from "./assets/cover.svg";
import type { BlogPost } from "../types";

const post: BlogPost = {
    slug: "thinking-in-events-not-controllers",
    title: "Thinking In Events, Not Controllers",
    description:
        "Nano treats requests, replies, errors and runtime signals as events moving through the same application model.",
    date: "2026-09-20",
    author: "NanoNative Team",
    tags: ["Nano", "Events", "Architecture"],
    readingTime: "5 min read",
    coverImage,
    coverAlt: "Event channels and subscribers inside a Nano application",
    content: (
        <>
            <p>
                Most Java web applications start with a controller. A request reaches a route, a method runs and that
                method calls the next layer. The model is familiar because it mirrors a direct function call: input comes
                in, code executes and output goes back.
            </p>

            <p>
                Nano starts from a different place. The request is not treated as a special framework callback. It is an
                event in the runtime. The same application can also receive configuration changes, file changes, log
                records, metric updates, service replies and errors as events. Nano services are still classes but those
                classes participate in a message flow instead of hiding the flow behind annotations.
            </p>

            <h2>The Request Is Not Special</h2>
            <p>
                When <code>HttpServer</code> receives a request, Nano publishes it on the HTTP request channel. A service
                can subscribe to that channel, inspect the request and decide whether it owns the path. The request does
                not need to be converted into a controller method first.
            </p>

            <pre>
                <code>{`app.subscribeEvent(EVENT_HTTP_REQUEST, event -> event.payloadOpt()
    .filter(HttpObject::isMethodGet)
    .filter(request -> request.pathMatch("/hello"))
    .ifPresent(request -> request.createResponse()
        .body(Map.of("Hello", System.getProperty("user.name")))
        .respond(event)));`}</code>
            </pre>

            <p>
                The important part is not the number of lines. The important part is where the boundary sits. The
                boundary is the event channel, not a hidden dispatcher. That makes it easy to see which code reacts to
                HTTP traffic and which code reacts to some other runtime signal.
            </p>

            <h2>Errors Use The Same Shape</h2>
            <p>
                In a controller-oriented framework, the error path often lives in a separate abstraction: exception
                handlers, filters, interceptors or middleware. Those abstractions are useful but they create a second
                mental model. Nano keeps errors close to the event that caused them.
            </p>

            <pre>
                <code>{`app.subscribeError(EVENT_HTTP_REQUEST, event -> event.payloadAck()
    .ifPresent(error -> error.response()
        .status(500)
        .body(Map.of("error", "request failed"))
        .respond(event)));`}</code>
            </pre>

            <p>
                A request event and an error produced while handling that request still share the same runtime vocabulary.
                That matters when debugging. You can trace the flow through the channel instead of jumping between
                controller code, exception mapper code and framework lifecycle code.
            </p>

            <h2>Events Need Shape</h2>
            <p>
                Event-driven code can become messy if every event name is vague and every payload is a map of arbitrary
                values. Nano gives you a small event model but the application still needs clear names and payload
                types. A good event name should answer three questions:
            </p>

            <ul>
                <li>Which part of the runtime or application emits this event?</li>
                <li>What payload type should a subscriber expect?</li>
                <li>Is the event a command, a fact that already happened or a request for a reply?</li>
            </ul>

            <p>
                HTTP request events are commands from the outside world. Configuration change events are facts about the
                process state. A service reply is a response to earlier work. Treating those shapes honestly keeps the
                system readable.
            </p>

            <h2>A Practical Service Layout</h2>
            <p>
                A useful Nano application often ends up with two kinds of services. Infrastructure services connect the
                runtime to the outside world. Application services subscribe to the events that carry business intent.
            </p>

            <pre>
                <code>{`final Nano app = new Nano(args,
    new HttpServer(),
    new MetricService(),
    new LogService(),
    new OrderApiService(),
    new OrderWorkflowService()
);`}</code>
            </pre>

            <p>
                <code>OrderApiService</code> might translate HTTP requests into domain events.{" "}
                <code>OrderWorkflowService</code> might validate those events, call plain Java domain code and publish the
                next event. This separation keeps HTTP concerns out of the workflow and keeps domain decisions out of the
                transport layer.
            </p>

            <h2>Where This Helps In Real Services</h2>
            <p>
                The event model becomes more useful as a service grows past one endpoint. A health endpoint, an internal
                metric endpoint, a file watcher and an application-specific handler can all live in the same runtime
                without pretending they belong to the same controller tree. Each service subscribes to the events it
                understands.
            </p>

            <p>
                That gives Nano applications a practical shape: infrastructure services connect to the outside world and
                business services react to the events they care about. When the flow is wrong, you inspect the event
                channel and the subscriber instead of searching for framework magic.
            </p>

            <h2>Debugging Starts With The Channel</h2>
            <p>
                The debugging loop is also different. Instead of asking which annotation registered a method, start with
                the channel. Was an event published? Did a subscriber match it? Did the payload have the expected type?
                Did the response happen on the same event or did the service publish a follow-up event?
            </p>

            <p>
                That sequence sounds simple but it prevents a lot of guessing. The runtime flow is visible because the
                application is built around explicit subscriptions. When a handler does not run, there are fewer places
                to search.
            </p>

            <h2>What To Watch</h2>
            <p>
                Events are not a license to make everything asynchronous. If a request needs a direct response, keep that
                response path obvious. If work can continue in the background, publish a separate event with a name that
                says what happened. Avoid making every method call into an event just because the runtime supports it.
            </p>

            <p>
                The value is not chaos. The value is having one runtime vocabulary for requests, errors and internal
                signals. When that vocabulary stays clear, the application becomes easier to inspect as it actually runs.
            </p>
        </>
    ),
};

export default post;
