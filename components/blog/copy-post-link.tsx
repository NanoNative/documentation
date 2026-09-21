"use client";

import { useState } from "react";

type CopyPostLinkProps = {
    url: string;
};

export default function CopyPostLink({ url }: CopyPostLinkProps) {
    const [copied, setCopied] = useState(false);

    async function copyLink() {
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(url);
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = url;
            textArea.style.position = "fixed";
            textArea.style.left = "-9999px";
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
        }

        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
    }

    return (
        <button
            type="button"
            onClick={copyLink}
            className="inline-flex h-9 items-center gap-2 rounded border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-gray-950"
            aria-label="Copy link to this blog post"
        >
            {copied ? (
                <svg
                    className="h-4 w-4 text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.31a1 1 0 0 1-1.42 0L3.29 9.225a1 1 0 1 1 1.42-1.41l4.04 4.07 6.54-6.59a1 1 0 0 1 1.414-.006Z"
                        clipRule="evenodd"
                    />
                </svg>
            ) : (
                <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                >
                    <path
                        d="M8.2 11.8a3 3 0 0 0 4.2 0l2.7-2.7a3 3 0 0 0-4.2-4.2l-.7.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.8 8.2a3 3 0 0 0-4.2 0L4.9 10.9a3 3 0 0 0 4.2 4.2l.7-.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {copied ? "Copied" : "Copy link"}
        </button>
    );
}
