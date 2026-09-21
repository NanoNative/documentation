import coverImage from "./assets/cover.svg";
import type { BlogPost } from "../types";

const post: BlogPost = {
    slug: "changing-nano-configuration-at-runtime",
    title: "Changing Nano Configuration At Runtime",
    description:
        "Nano can treat configuration changes as runtime events, letting services reload selected values deliberately.",
    date: "2026-09-18",
    author: "NanoNative Team",
    tags: ["Nano", "Configuration", "Runtime"],
    readingTime: "5 min read",
    coverImage,
    coverAlt: "Configuration update flowing into a running service",
    content: (
        <>
            <p>
                Configuration usually starts simple. A port here, a profile there, maybe a path to a certificate. Then
                the service starts running and those small details become operational decisions. Which settings are safe
                to reload? Which ones should require a restart? Which source wins when the same key appears in more than
                one place?
            </p>

            <p>
                Nano keeps configuration close to the runtime. Services read values from the context and configuration
                changes can be represented as events. That does not mean every setting should be mutable. It means the
                reload path can be explicit instead of being hidden behind a process restart.
            </p>

            <h2>Configuration Is Still Explicit</h2>
            <p>
                Nano can read configuration from property files, environment variables, JVM system properties, command
                line arguments and values passed at startup. The important part is that services access configuration
                through the same context model. The service should not need to know whether a value came from a file, an
                environment variable or a startup map.
            </p>

            <pre>
                <code>{`final Nano app = new Nano(Map.of(
    "order_retry_limit", "3",
    "order_sample_rate", "0.25"
), new OrderService());`}</code>
            </pre>

            <p>
                That gives you a clean boundary: startup defines the initial state and runtime events define what changes
                after the process is alive.
            </p>

            <h2>Changes Can Become Events</h2>
            <p>
                When a config update is published, interested services can react. A service might update a threshold,
                change a polling interval, reload a template path or refresh a certificate reference. The update is not
                magic. A service has to subscribe and decide what to do with the change.
            </p>

            <pre>
                <code>{`context.sendEvent(EVENT_CONFIG_CHANGE, Map.of(
    "app_service_http_port", "8081"
));`}</code>
            </pre>

            <p>
                A handler can then read the changed key, validate the value and update only the in-memory state it owns.
                That validation step is important. Runtime config should be treated like user input: parse it, check it
                and keep the previous value if the new value is invalid.
            </p>

            <pre>
                <code>{`context.subscribeEvent(EVENT_CONFIG_CHANGE, event -> event.payloadOpt()
    .map(Map.class::cast)
    .map(values -> values.get("order_retry_limit"))
    .map(String::valueOf)
    .map(Integer::parseInt)
    .filter(limit -> limit >= 0 && limit <= 10)
    .ifPresent(this::setRetryLimit));`}</code>
            </pre>

            <p>
                A production-grade handler would usually log rejected values and expose the active value through metrics
                or a local observability endpoint. The important part is that the state transition is owned by the
                service. The config event asks for a change. The service decides whether the change is safe.
            </p>

            <h2>Where FileWatcher Fits</h2>
            <p>
                <code>FileWatcher</code> can publish file change events for configuration files, certificates or other
                operational files. That gives services a path to react to changes without asking every user to restart
                the process for small updates.
            </p>

            <p>
                File watching is most useful when the application owns the reload semantics. A changed file can produce an
                event but the service should still decide whether to reload immediately, debounce repeated changes or
                wait until the next request.
            </p>

            <h2>Think In Reload Classes</h2>
            <p>
                Runtime configuration is easier to design when settings are grouped by reload behavior.
            </p>

            <ul>
                <li>Immediate values can be swapped in memory, such as retry limits and sampling rates.</li>
                <li>Deferred values can apply to new work but should not affect work already in flight.</li>
                <li>Restart values affect resources created at startup, such as ports and core service composition.</li>
                <li>Dangerous values need validation, audit logging and sometimes manual approval.</li>
            </ul>

            <p>
                These classes prevent a common mistake: making a setting technically mutable before deciding whether it is
                operationally safe to mutate.
            </p>

            <h2>Good Runtime Settings Are Boring</h2>
            <p>
                The best runtime settings are values that can change without rebuilding the world: log levels, sampling
                rates, feature thresholds, retry limits, template paths and allow lists. These values can usually be
                swapped in memory without breaking existing requests.
            </p>

            <p>
                Ports, database schemas and object construction rules are different. They often affect resources that
                were created during startup. Reloading those values can be done but it needs a deliberate stop-start path
                and tests that cover partial failure.
            </p>

            <h2>Failure Handling Is Part Of The Feature</h2>
            <p>
                A reload path is not complete until the failure path is boring. If a value cannot be parsed, keep the last
                known good value. If a file changes twice in quick succession, avoid applying a half-written file. If a
                dependent resource cannot restart, keep serving with the old resource when possible and publish an error
                event.
            </p>

            <p>
                This is where Nano's event model is useful. A failed reload can be an event too. A logging service, metric
                service or Developer Console can observe it without being wired directly into the business service.
            </p>

            <h2>What To Watch</h2>
            <p>
                Runtime configuration is not a reason to make every setting mutable. Some values are safe to reload.
                Others should stay fixed for the life of the process. The useful design is to make the reload path
                explicit, preserve the last known good value and test invalid updates like any other runtime behavior.
            </p>
        </>
    ),
};

export default post;
