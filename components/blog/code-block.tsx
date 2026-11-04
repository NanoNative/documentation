"use client";

import { useEffect, useRef, useState, type ComponentPropsWithoutRef } from "react";

type CodeBlockProps = ComponentPropsWithoutRef<"pre">;

export default function CodeBlock({ children, className = "", ...props }: CodeBlockProps) {
    const preRef = useRef<HTMLPreElement>(null);
    const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
    const label = props["aria-label"] ?? "Code example";

    useEffect(() => {
        if (copyState === "idle") return;
        const timer = window.setTimeout(() => setCopyState("idle"), 2000);
        return () => window.clearTimeout(timer);
    }, [copyState]);

    async function copyCode() {
        const pre = preRef.current;
        if (!pre) return;

        try {
            await navigator.clipboard.writeText(pre.querySelector("code")?.textContent ?? pre.textContent ?? "");
            setCopyState("copied");
        } catch {
            setCopyState("failed");
        }
    }

    return (
        <div className="min-w-0 rounded-lg bg-gray-900" data-code-block>
            <div className="flex h-10 items-center justify-end gap-2 px-2">
                <span
                    role="status"
                    aria-live="polite"
                    className={copyState === "idle" ? "sr-only" : `rounded px-2 py-1 text-xs ${
                        copyState === "copied" ? "bg-[#24392B] text-[#A4EA82]" : "bg-[#3A232A] text-[#FF9AA5]"
                    }`}
                >
                    {copyState === "copied" ? "Copied" : copyState === "failed" ? "Copy failed" : ""}
                </span>
                <button
                    type="button"
                    onClick={copyCode}
                    aria-label={`Copy code: ${label}`}
                    title={copyState === "copied" ? "Copied" : copyState === "failed" ? "Copy failed — try again" : "Copy code"}
                    className="inline-flex h-8 w-8 items-center justify-center rounded text-gray-300 hover:bg-gray-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nanoBlue"
                >
                    <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        {copyState === "copied" ? (
                            <path d="m5 12 4 4L19 6" />
                        ) : (
                            <>
                                <rect x="8" y="8" width="12" height="12" rx="2" />
                                <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                            </>
                        )}
                    </svg>
                </button>
            </div>
            <pre
                {...props}
                ref={preRef}
                tabIndex={props.tabIndex ?? 0}
                role={props.role ?? "region"}
                aria-label={label}
                className={`!m-0 !rounded-t-none max-h-80 overflow-auto focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-nanoBlue ${className}`}
            >
                {children}
            </pre>
        </div>
    );
}
