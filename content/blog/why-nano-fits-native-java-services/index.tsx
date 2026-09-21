import coverImage from "./assets/cover.svg";
import type { BlogPost } from "../types";

const post: BlogPost = {
    slug: "why-nano-fits-native-java-services",
    title: "Why Nano Fits Native Java Services",
    description:
        "Native Java is easier when the runtime is explicit, dependency-light and careful about resources.",
    date: "2026-09-17",
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
                Nano does not make native-image work disappear. It keeps the surface smaller. Services are added
                explicitly, dependencies are limited and runtime behavior is easier to see from the application setup.
                That is exactly the kind of shape native-image tends to reward.
            </p>

            <h2>The Native Build Needs A Closed World</h2>
            <p>
                A native-image build analyzes the application ahead of time. It wants to know which classes are used,
                which resources must be available and which dynamic behavior needs metadata. Dynamic Java still works,
                but it has to be described well enough for the image builder.
            </p>

            <p>
                This is where small frameworks have an advantage. If the runtime does not scan the world looking for
                annotated classes, the image builder has less hidden behavior to account for.
            </p>

            <h2>What Usually Hurts Native Builds</h2>
            <p>
                Native-image friction often comes from code that is easy for the JVM but hard to close over ahead of time:
                reflection, dynamic proxies, runtime-loaded resources, service descriptors, classpath scanning and
                libraries that initialize too much during startup. None of those patterns are automatically wrong. They
                just need metadata or careful initialization choices.
            </p>

            <p>
                Nano's advantage is not that it bans dynamic Java. The advantage is that the core runtime does not ask
                every application to start with a large amount of dynamic framework behavior.
            </p>

            <h2>Explicit Services Help</h2>
            <p>
                A Nano app starts the services it needs. That is useful for native builds because the application shape
                is visible. If the app starts <code>HttpServer</code>, <code>MetricService</code> and{" "}
                <code>LogService</code>, those are the moving parts to care about.
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

            <h2>Small Dependencies Matter</h2>
            <p>
                Every dependency brings classes, resources and possible native-image metadata. Keeping the dependency
                surface small reduces the amount of behavior the native image build has to account for.
            </p>

            <p>
                This is not only about image size. It also affects build time and failure modes. A dependency that works
                perfectly on the JVM can still require resource metadata, reflection metadata or initialization hints for
                native-image. If the application only starts the Nano services it needs, there are fewer surprises.
            </p>

            <h2>Resources Still Need Care</h2>
            <p>
                Native builds still need resource configuration when files must be available at runtime. That can include
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
                loaded at runtime. The build should describe those resources directly instead of relying on the JVM class
                path behavior you get during local development.
            </p>

            <h2>Keep Native Metadata Near The Dependency</h2>
            <p>
                Native configuration is easiest to maintain when it lives near the code that needs it. If a service loads
                resources at runtime, document the include pattern with that service. If a dependency needs reflection
                metadata, keep the reason close to the dependency rather than hiding it in a generic build block.
            </p>

            <p>
                This matters as a project grows. A native-image configuration file that nobody understands becomes a
                dumping ground. The better pattern is boring: each service declares the resources it needs and the
                application build includes only the resources for the services it starts.
            </p>

            <h2>A Useful Native Checklist</h2>
            <ul>
                <li>Start only the Nano services the application actually needs.</li>
                <li>Include runtime resources deliberately, especially config files and service descriptors.</li>
                <li>Check dependencies for reflection, proxy or resource metadata requirements.</li>
                <li>Measure startup time, RSS memory and request latency in the target container.</li>
                <li>Keep JVM and native deployments comparable so regressions are visible.</li>
            </ul>

            <h2>Measure The Actual Service</h2>
            <p>
                Native Java is often chosen for startup time and memory footprint. Those are good reasons, especially for
                short-lived services, small containers and environments where cold starts matter. Throughput is more
                nuanced. A long-running JVM can still be very fast after warmup. The honest answer is to measure the
                service you actually deploy.
            </p>

            <p>
                Nano helps by keeping the runtime small enough that the measurement is about your application, not about a
                large framework boot sequence. That does not replace benchmarking. It makes the benchmark easier to
                understand.
            </p>

            <pre>
                <code>{`hyperfine \\
  './target/app-jvm/bin/run' \\
  './target/app-native/bin/run'`}</code>
            </pre>

            <p>
                Startup is only one number. For services that run for days, watch steady-state memory and latency too.
                Native-image can be a strong fit for small services and command-style workloads but the final decision
                should come from measurement rather than assumption.
            </p>

            <h2>What To Watch</h2>
            <p>
                Native images are a deployment choice, not an automatic speedup. Measure startup, memory and throughput
                for the actual service. Nano is a good fit because it keeps the runtime understandable but the final
                build still belongs to the application. If a service uses reflection-heavy libraries, dynamic proxies or
                runtime-loaded resources, document that native metadata alongside the dependency that needs it.
            </p>
        </>
    ),
};

export default post;
