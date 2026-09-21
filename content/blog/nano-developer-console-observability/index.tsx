import coverImage from "./assets/cover.svg";
import type { BlogPost } from "../types";

const post: BlogPost = {
    slug: "nano-developer-console-observability",
    title: "Local Observability For Nano Applications",
    description:
        "Developer Console gives a local view into events, logs, metrics, runtime config and services while a Nano app runs.",
    date: "2026-09-16",
    author: "NanoNative Team",
    tags: ["Observability", "Developer Console", "Nano"],
    readingTime: "5 min read",
    coverImage,
    coverAlt: "Nano Developer Console observability surfaces",
    content: (
        <>
            <p>
                Sometimes the first observability problem is local. A service is running, events are moving and you want
                to know what just happened without wiring a full telemetry stack. Did the request arrive? Which event was
                published? Did the config change apply? Is the service still alive?
            </p>

            <p>
                The Nano Developer Console is a Nano service for that loop. It adds a local HTTP UI and JSON endpoints
                for recent events, logs, system metrics, runtime configuration and service state.
            </p>

            <h2>The Problem Is Feedback Time</h2>
            <p>
                Production observability usually optimizes for durability, correlation, alerting and retention. Local
                observability optimizes for feedback time. When a developer is changing a handler, tuning runtime config
                or checking a service interaction, waiting for a full telemetry pipeline is too much ceremony.
            </p>

            <p>
                Developer Console exists for that shorter loop. It gives the running process a local inspection surface,
                mounted under <code>/dev-console</code>, without requiring the application to be deployed somewhere else
                first.
            </p>

            <h2>What It Shows</h2>
            <ul>
                <li>Live events with pause and export controls.</li>
                <li>Live logs from the running Nano application.</li>
                <li>Runtime metrics such as heap usage, CPU usage, thread counts and total events.</li>
                <li>Configuration values that can be changed while the app is running.</li>
                <li>Service start and stop controls when service indexing is configured.</li>
            </ul>

            <p>
                The console is intentionally close to the runtime model. It does not try to hide Nano behind generic
                dashboards. If your application is built around services and events, the local observability surface
                should show services and events.
            </p>

            <h2>How To Start It</h2>
            <p>
                Add <code>DevConsoleService</code> next to the services in your Nano app. By default, the UI is mounted
                at <code>http://localhost:8080/dev-console/ui</code>.
            </p>

            <pre>
                <code>{`Nano nano = new Nano(Map.of(
    CONFIG_SERVICE_HTTP_PORT, "8080"
), new DevConsoleService(), new HttpServer(), new MyAppService());`}</code>
            </pre>

            <p>
                This is the same explicit-service style as the rest of Nano. The console is present because the
                application starts it. Remove the service and the UI disappears from the runtime.
            </p>

            <h2>What The Mount Path Means</h2>
            <p>
                The console is mounted under <code>/dev-console</code> by default. The UI lives at{" "}
                <code>http://localhost:8080/dev-console/ui</code>. Keeping the console under a distinct path makes it
                easier to recognize which endpoints belong to application behavior and which endpoints belong to local
                inspection.
            </p>

            <p>
                That boundary matters when a service also exposes its own HTTP API. The console should be easy to find
                during development but should not blur into the business API.
            </p>

            <h2>The UI Is Only Half The Story</h2>
            <p>
                A local observability tool should be useful both to a person and to a script. The Developer Console
                exposes a UI for inspection and JSON endpoints for runtime data. That makes it useful during manual
                debugging, smoke tests and automated checks around local development environments.
            </p>

            <p>
                For example, a developer can open the UI after starting the service and watch events move through the
                application. A test can query the JSON endpoint to confirm that expected services started or that a recent
                event was emitted. The same runtime state supports both workflows.
            </p>

            <h2>Event Inspection Is The Center</h2>
            <p>
                Nano applications are event-oriented, so the most useful local question is often: what event did the
                runtime see? The event view helps answer that before you spend time reading logs. If the event is missing,
                the problem is upstream. If the event exists and no subscriber reacts, the problem is in routing,
                filtering or service startup. If the subscriber reacts and the response is wrong, the problem is inside
                the handler.
            </p>

            <p>
                That order gives local debugging a simple structure. Event first, subscriber second, error third, config
                fourth. Logs are still useful but they stop being the only window into the process.
            </p>

            <h2>Why It Belongs In Development</h2>
            <p>
                The console keeps recent observability data in memory. That makes it useful for development and test
                environments where quick inspection matters more than long-term storage. It is designed for the moment
                when you are building the service and need answers immediately.
            </p>

            <p>
                That is a different job from production observability. Production systems need durable logs, metrics,
                traces, alerting, retention policies and access control. Developer Console is about shortening the local
                feedback loop before the service reaches that environment.
            </p>

            <h2>How It Fits With Production Telemetry</h2>
            <p>
                Developer Console should not compete with OpenTelemetry, Prometheus, log aggregation or tracing backends.
                It sits earlier in the lifecycle. The developer uses it to understand whether the application is emitting
                the right signals. Production telemetry then collects durable signals from deployed services.
            </p>

            <p>
                That division is healthy. Local tools should be fast, close and disposable. Production tools should be
                durable, secure and queryable over time.
            </p>

            <h2>What To Look For First</h2>
            <p>
                When debugging a Nano application locally, start with the event stream. If the expected event is missing,
                the problem is usually before the service handler. If the event exists but no reply appears, inspect the
                subscriber and the error stream. If both look correct, move to logs and runtime config.
            </p>

            <p>
                This order keeps the investigation close to the application model: event, subscriber, error, config. It
                also avoids the common trap of staring at logs before confirming that the runtime saw the event at all.
            </p>

            <h2>What To Watch</h2>
            <p>
                Developer Console is not a replacement for production telemetry. It is a local tool for understanding a
                running app while building, testing or debugging it. Production systems still need a durable observability
                backend.
            </p>
        </>
    ),
};

export default post;
