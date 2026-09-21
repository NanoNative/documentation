import coverImage from "./assets/cover.svg";
import type { BlogPost } from "../types";

const post: BlogPost = {
    slug: "changing-nano-configuration-at-runtime",
    title: "Changing Nano Configuration At Runtime",
    description:
        "Nano can treat configuration changes as runtime events, letting services reload selected values deliberately.",
    date: "2026-09-20",
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
                line arguments and values passed into the Nano DSL. Services access those values through the same context
                model.
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

            <h2>Config Changes Become Events</h2>
            <p>
                When a config update is published, interested services can react. A service might update a threshold,
                change a polling interval, reload a template path or refresh a certificate reference. The update is not
                magic. A service has to subscribe and decide what to do with the change.
            </p>

            <pre>
                <code>{`context.newEvent(EVENT_CONFIG_CHANGE, () -> Map.of(
    "order_retry_limit", "5",
    "order_sample_rate", "0.50"
)).broadcast(true).async(true).send();`}</code>
            </pre>

            <p>
                A handler can then read the changed key, validate the value and update only the in-memory state it owns.
                That validation step is important. Runtime config should be treated like user input: parse it, check it
                and keep the previous value if the new value is invalid.
            </p>

            <pre>
                <code>{`context.subscribeEvent(EVENT_CONFIG_CHANGE, (event, values) ->
    Optional.ofNullable(values.get("order_retry_limit"))
    .map(String::valueOf)
    .map(Integer::parseInt)
    .filter(limit -> limit >= 0 && limit <= 10)
    .ifPresent(this::setRetryLimit));`}</code>
            </pre>

            <p>
                A production-grade handler would usually log rejected values and expose the active value through metrics
                or a local observability endpoint. The service owns the state transition. The config event asks for a
                change. The service decides whether the change is safe.
            </p>

            <h2>Where FileWatcher Fits</h2>
            <p>
                <code>FileWatcher</code> can publish file change events for configuration files, certificates or other
                operational files. That gives services a path to react to changes without asking every user to restart
                the process for small updates.
            </p>

            <p>
                File watching works best when the application owns the reload semantics. A changed file can produce an
                event but the service should still decide whether to reload immediately or bounce changes.
            </p>

            <h2>Think In Reload Classes</h2>
            <p>
                Runtime configuration is easier to design when settings are grouped by reload behavior.
            </p>

            <ul>
                <li>Immediate values can be swapped in memory, such as retry limits and sampling rates.</li>
                <li>Deferred values can apply to new work but will not affect work already in flight.</li>
                <li>Restart values affect resources created at startup, such as ports and core service composition.</li>
            </ul>

            <h2>Good Runtime Settings Are Boring</h2>
            <p>
                The best runtime settings are values that can change without rebuilding the world: log levels, sampling
                rates, feature thresholds, retry limits, template paths and allow lists. These values can usually be
                swapped in memory without breaking existing requests.
            </p>

            <p>
                Ports, database schemas and object construction rules are different. They often affect resources that
                were created during startup. Reloading those values can be done but it needs a deliberate stop-start path
                and would need to be coded by the application developer.
            </p>

            <h2>Failure Handling Is Part Of The Feature</h2>
            <p>
                A reload path is not complete until the failure path is boring. If a value cannot be parsed, keep the last
                known good value.
            </p>

            <p>
                Nano's event model keeps that failure path visible. A failed reload can be an event too. A logging service,
                metric service or Developer Console can observe it without being wired directly into the business service.
            </p>

            <h2>What To Watch</h2>
            <p>
                Runtime configuration is not a reason to make every setting mutable. Some values are safe to reload.
                Others should stay fixed for the life of the process. Keep the reload path explicit, preserve the last
                known good value and test invalid updates like any other runtime behavior.
            </p>
        </>
    ),
};

export default post;
