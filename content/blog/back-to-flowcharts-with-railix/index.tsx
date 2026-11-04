import Image from "next/image";
import coverImage from "./assets/cover.svg";
import creatorFlow from "./assets/creator-flow.png";
import type { BlogPost } from "../types";

const post: BlogPost = {
    slug: "back-to-flowcharts-with-railix",
    title: "Back to Flowcharts with Railix",
    description:
        "Before we learned to code, many of us learned to draw flowcharts. Creating with Railix feels like coming a full circle.",
    date: "2026-11-04",
    author: "NanoNative Team",
    tags: ["Railix", "DX", "Visual Modeling"],
    readingTime: "3 min read",
    coverImage,
    coverAlt: "A flowchart validates input, saves it and responds. Failed saves loop through a wait step while retries remain; invalid input and exhausted retries take separate exit paths.",
    content: (
        <>
            <p>
                Before we learned to code, most of us learned to draw flowcharts. A start, a few boxes, a decision,
                and arrows connecting everything. We worked out what should happen before worrying about how to write it.
            </p>

            <p>
                Where does the input come from? What happens next? What if the answer is no? Those were often our first
                programming questions, asked with a pencil in hand.
            </p>

            <p>
                Then we learned to code. The logic moved into files, functions and classes. As our applications grew,
                following that logic meant moving between files. And when we needed to explain it to someone,
                we often found ourselves back at a whiteboard, drawing boxes and arrows again.
            </p>

            <p>
                That familiar experience has been on our minds while working on Railix Creator.
            </p>

            <p>
                We have made the Creator more intuitive in our latest update, so following an application feels
                more like following a flowchart. You can see the steps, the decisions and the paths connecting them.
            </p>

            <figure className="my-8">
                <a
                    href={creatorFlow.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg border border-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nanoTextLink"
                >
                    <Image
                        src={creatorFlow}
                        alt="Railix Creator showing an App connected to HTTP, Switch, Choice, and Field Manipulation steps, with branching paths and average execution times."
                        sizes="(min-width: 768px) 720px, 100vw"
                        className="h-auto w-full"
                    />
                </a>
                <figcaption className="mt-3 text-sm leading-6 text-gray-600">
                    A flow in Railix Creator, with branching paths and average execution times alongside the steps.
                </figcaption>
            </figure>

            <p>
                Think of a simple request: check the input, save it if it is valid and return a response. If the input
                is invalid, take a different path and explain why. Seeing those routes together lets you walk through
                the behavior from beginning to end.
            </p>

            <p>
                It also gives a conversation somewhere to start. What happens if this check fails? Should that step
                come earlier? Is there a route we have missed? You can point to the part you mean and follow it together.
            </p>

            <p>
                The Steps describe the work, their links determine what happens next, and Railix builds the application
                from that model. The flow you use to understand the application also shapes its behavior.
            </p>

            <p>
                That is why making the Creator flow more intuitive to follow matters. Whether you are building a flow,
                reviewing it with a teammate or returning to it months later, you have a visible place to pick up
                the story.
            </p>

            <p>
                We started with flowcharts to work out what to build. Now we are bringing that into
                the IDE we use to build software.
            </p>

            <p>
                <a
                    href="https://railix.mitbauen.space/"
                    className="font-semibold text-nanoTextLink underline underline-offset-4 hover:text-blue-700"
                >
                    Explore Railix
                </a>
            </p>
        </>
    ),
};

export default post;
