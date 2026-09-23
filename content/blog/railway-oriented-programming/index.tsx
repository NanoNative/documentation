import coverImage from "./assets/cover.svg";
import type { BlogPost } from "../types";

const post: BlogPost = {
    slug: "railway-oriented-programming",
    title: "Railway-Oriented Programming: Making The Whole Application Path Visible",
    description:
        "Railix extends railway-oriented thinking from individual operations to the visible route a request takes through an application.",
    date: "2026-09-23",
    author: "NanoNative Team",
    tags: ["railix", "Railway Oriented Programming", "Architecture"],
    readingTime: "4 min read",
    coverImage,
    coverAlt: "Railix application flow shown as connected steps with visible success and failure routes",
    content: (
        <>
            <p>
                Railway-Oriented Programming is already an established concept in software development. Popularized by
                Scott Wlaschin and others, it describes composing operations that can succeed or fail. An expected failure
                becomes an explicit outcome that the next operation can handle, instead of disappearing into an exception
                or being ignored.
            </p>

            <p>
                When someone asks, "Why was this order rejected?", the answer is rarely in one place.
            </p>

            <p>
                The business rule might live in application code, the authentication policy in another service and the
                data change in a repository. Each part may work, yet the path connecting them is difficult to see.
            </p>

            <p>
                Railix borrows that idea and asks a broader question: what if you could see how a request moves through
                business rules, permissions, data changes and outcomes without stitching the story together from
                scattered code?
            </p>

            <h2>A Diagram That Determines Behavior</h2>

            <p>
                Many teams already draw flows. The problem is that a diagram can drift away from the code it is meant to
                explain.
            </p>

            <p>
                Railix treats Flows and Steps as an executable application model. The links between Steps determine
                execution; the visual layout helps people navigate it. The compiler turns the model into an application
                rather than asking a production workflow engine to interpret the diagram on every request.
            </p>

            <p>
                This gives different people a shared place to ask precise questions. A developer can inspect the input to
                a decision. A product manager can check whether the route matches the intended rule. Support can trace the
                outcome of a concrete example.
            </p>

            <p>
                The model is useful only if those questions connect to actual behavior, so examples and observed
                executions matter alongside the graph.
            </p>

            <h2>Failure Is Part Of The Route</h2>

            <p>
                A railway is most valuable where things do not go as planned. A rejected input, a missing permission and
                an unavailable dependency are different outcomes. Giving them explicit routes makes their handling easier
                to review.
            </p>

            <p>
                The aim is to make all decision paths, including failure modes, visible and testable.
            </p>

            <h2>Build From The Path</h2>

            <p>
                Railix currently generates Java for a modeled Flow and compiles it to JVM bytecode. The generated
                application follows declared Step links and outcomes; it does not interpret the project graph at runtime.
            </p>

            <p>
                A self-contained application artifact and native machine code for generated applications are part of the
                goals.
            </p>

            <p>
                Compilation matters here because the model is more than a presentation layer. It is the source from which
                the application is built. The long-term goal is to carry platform and operations into the same model, so
                the team can connect what it intended to build with what actually ran.
            </p>

            <p>
                That is the railway railix is building.
            </p>

            <p>
                More about railix:{" "}
                <a
                    href="https://railix.mitbauen.space/"
                    className="font-semibold text-nanoLinkBlue underline underline-offset-4 hover:text-blue-700"
                >
                    https://railix.mitbauen.space/
                </a>
            </p>
        </>
    ),
};

export default post;
