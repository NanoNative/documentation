import coverImage from "./assets/cover.svg";
import type { BlogPost } from "../types";

const post: BlogPost = {
    slug: "why-nano-fits-native-java-services",
    title: "Why Nano Fits Native Java Services",
    description:
        "Native Java is easier when the runtime is explicit, dependency-light and careful about resources.",
    date: "2026-09-19",
    author: "NanoNative Team",
    tags: ["Nano", "GraalVM", "Native Java"],
    readingTime: "5 min read",
    coverImage,
    coverAlt: "Native image build surface for a Nano service",
    content: (
        <>
            <p>
                GraalVM native-image rewards applications that are explicit. It can compile a lot of Java code but it
                needs to understand what the application will use at runtime. The more a framework relies on hidden
                reflection and classpath scanning, the more native configuration the build usually needs.
            </p>

            <p>
                Nano keeps the surface small by avoiding reflection-heavy runtime discovery in its core model. Services
                are added explicitly, dependencies are limited and runtime graphs are easier to inspect. That is the
                kind of application shape native-image rewards.
            </p>

            <h2>The Native Build Needs A Closed World</h2>
            <p>
                A native-image build analyzes the application ahead of time. It wants to know which classes are used,
                which resources must be available and which dynamic behavior needs metadata. Dynamic Java still works,
                but it has to be described well enough for the image builder.
            </p>

            <p>
                If the runtime does not scan the world looking for annotated classes, the image builder has 
                zero hidden behavior to account for.
            </p>

            <h2>What Usually Hurts Native Builds</h2>
            <p>
                Native-image friction often comes from code that is easy for the JVM but hard to close over ahead of time:
                reflection, dynamic proxies, runtime-loaded resources, service descriptors, classpath scanning and
                libraries that initialize too much during startup.
            </p>

            <p>
                Nano's advantage is not that it bans dynamic Java. The advantage is that the core runtime does not ask
                every application to carry a large amount of dynamic framework behavior for small functionality.
            </p>

            <h2>Explicit Services Help</h2>
            <p>
                A Nano app starts the services it needs. That helps native builds because the application shape
                is visible. If the app starts <code>HttpServer</code>, <code>MetricService</code> and <code>LogService</code>,
                those are the moving parts to care about.
            </p>

            <pre>
                <code>{`public static void main(final String[] args) {
    new Nano(args,
        new HttpServer(),
        new MetricService(),
        new LogService()
    );
}`}</code>
            </pre>

            <h2>Typed Events Keep Boundaries Concrete</h2>
            <p>
                Nano events are not only string names with arbitrary payloads. A channel can declare the payload type and
                the response type. That gives the event boundary a concrete shape. Inside a service, that can look like
                this:
            </p>

            <pre>
                <code>{`public record OrderLookupRequest(String orderId) {}
public record OrderLookupResult(String orderId, String status) {}

static final Channel<OrderLookupRequest, OrderLookupResult> EVENT_ORDER_LOOKUP =
    Channel.registerChannelId(
        "ORDER_LOOKUP",
        OrderLookupRequest.class,
        OrderLookupResult.class
    );

@Override
public void onEvent(final Event<?, ?> event) {
    event.channel(EVENT_ORDER_LOOKUP).ifPresent(lookupEvent -> lookupEvent.payloadOpt()
        .map(request -> new OrderLookupResult(request.orderId(), "OPEN"))
        .ifPresent(lookupEvent::respond));
}`}</code>
            </pre>

            <p>
                For native services, the runtime contract is made out of ordinary Java classes. Request payloads,
                response payloads and service boundaries stay visible in code. Typed event channels also remove mystery
                for developers and maintainers of Nano applications.
            </p>

            <h2>Small Dependencies Matter</h2>
            <p>
                Every dependency brings classes, resources and possible native-image metadata. Keeping the dependency
                surface small reduces the amount of behavior the native image build has to account for.
            </p>

            <h2>Resources Still Need Care</h2>
            <p>
                Native builds need resource configuration when files must be available at runtime. That can include
                application resources, service descriptors or UI assets from development tools. The current Native Build
                Tools plugin supports this through resource include patterns and generated resource config.
            </p>

            <pre>
                <code>{`<goals>
    <goal>generateResourceConfig</goal>
    <goal>compile-no-fork</goal>
</goals>`}</code>
            </pre>

            <p>
                For a basic Nano application this might only include application config resources. For a development tool
                such as the Developer Console, the native image also needs the service descriptor and UI assets that are
                loaded at runtime so the console can render the UI and discover controllable services.
            </p>


            <h2>Keep Native Metadata Near The Dependency</h2>
            <p>
                Native configuration is easiest to maintain when the reason for it is clear. If a service loads resources
                at runtime, keep the include pattern close to that service. If a transitive dependency needs reflection
                metadata, document why it needs it instead of turning it into operational folklore.
            </p>


            <h2>Measure The Actual Service</h2>
            <p>
                Native Java is often chosen for startup time and memory footprint. Those are good reasons, especially for
                short-lived services, small containers and environments where cold starts matter. A long-running JVM can
                still be very fast after warmup and JIT optimizations. For services that run for days, watch steady-state
                memory and latency too before deciding.
            </p>

            <p>
                Nano helps by keeping the runtime small enough that the measurement is about your application, not about a
                large framework boot sequence. It also makes the benchmarking easier to understand.
            </p>

            <h2>What To Watch</h2>
            <p>
                Native images are a deployment choice. Measure startup, memory and throughput for the actual service. 
                Nano fits this model because it keeps the runtime understandable but the final build still belongs to the
                application. If a service uses reflection-heavy libraries, dynamic proxies or runtime-loaded resources,
                it comes with its own overhead to make it compatible.
            </p>
        </>
    ),
};

export default post;
