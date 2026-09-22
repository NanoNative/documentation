import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    tags: string[];
    readingTime: string;
    coverImage: StaticImageData | string;
    coverAlt: string;
    content: ReactNode;
};
