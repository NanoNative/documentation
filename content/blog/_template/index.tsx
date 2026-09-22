import coverImage from "./assets/cover.svg";
import type { BlogPost } from "../types";

const post: BlogPost = {
    slug: "replace-with-post-slug",
    title: "Replace With Blog Post Title",
    description: "One or two sentences that explain why this post is worth opening.",
    date: "2026-09-21",
    author: "NanoNative Team",
    tags: ["Nano"],
    readingTime: "5 min read",
    coverImage,
    coverAlt: "Short description of the cover image",
    content: (
        <>
            <p>Write the opening problem statement here.</p>

            <h2>Section Heading</h2>
            <p>Write the body here.</p>
        </>
    ),
};

export default post;
