"use client";

import React, { useState, useRef, useEffect } from "react";
import Footer from "@/components/ui/footer";
import {
    Bars3Icon,
    XMarkIcon,
    DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Logo from "@/components/ui/logo";
import Prism from "prismjs";
import "prismjs/components/prism-java";
import documentation_subtopic_content from "./documentationContent";
import { siteLinks } from "@/constants/links";

const menuItems = [
    { name: "Home", id: "home", href: siteLinks.home },
    {
        name: "Getting Started",
        id: "getting-started",
        href: siteLinks.gettingStarted,
    },
    { name: "Documentation", id: "documentation", href: siteLinks.docs },
    { name: "Features", id: "features", href: siteLinks.features },
    { name: "About", id: "about", href: siteLinks.about },
    { name: "Community", id: "community", href: siteLinks.community },
];

const topics = [
    {
        name: "Introduction",
        id: "introduction",
        subtopics: [],
    },
    {
        name: "Core Concept",
        id: "core-concept",
        subtopics: [
            { name: "Concept", id: "concept" },
            { name: "Modern and Fluent Design 🚀", id: "modern-and-fluent-design" },
            { name: "Minimal Dependencies 🔒", id: "no-external-dependencies" },
            {
                name: "Minimal Resource Consumption 🌱",
                id: "minimal-resource-consumption",
            },
            {
                name: "Non-Blocking Virtual Threads 🧵",
                id: "non-blocking-virtual-threads",
            },
            { name: "GraalVM Compatibility ⚡", id: "graalvm-compatibility" },
            { name: "Extensible and Open 🪶", id: "extensible-and-open" },
            { name: "Modular Design 🧩", id: "modular-design" },
            {
                name: "Service-Based Architecture 📊",
                id: "service-based-architecture",
            },
            { name: "Flexible Object Mapping 🔄", id: "flexible-object-mapping" },
            { name: "Configuration Management ⚙️", id: "configuration-management" },
        ],
    },
    {
        name: "Mechanics",
        id: "mechanics",
        subtopics: [
            { name: "Error Handling", id: "error-handling" },
            { name: "Registers", id: "registers" },
            { name: "Integrations", id: "integrations" },
            { name: "Code Examples", id: "code-examples" },
        ],
    },
    {
        name: "Components",
        id: "components",
        subtopics: [
            { name: "Context", id: "nano-context" },
            { name: "Events", id: "nano-events" },
            { name: "Logger", id: "nano-logger" },
            { name: "Schedulers", id: "nano-schedulers" },
            { name: "Services", id: "nano-services" },
        ],
    },
    {
        name: "Getting Started",
        id: "getting-started",
        subtopics: [
            { name: "Maven example", id: "maven-example" },
            { name: "Gradle example", id: "gradle-example" },
        ],
    },
    {
        name: "Build Nano",
        id: "build-nano",
        subtopics: [],
    },
    {
        name: "Observability",
        id: "observability",
        subtopics: [
            { name: "Developer Console 🖥️", id: "developer-console" },
            { name: "Setup 🧩", id: "developer-console-setup" },
            { name: "Configuration ⚙️", id: "developer-console-configuration" },
            { name: "Endpoints 🔌", id: "developer-console-endpoints" },
        ],
    },
    {
        name: "Benefits",
        id: "benefits-of-nano",
        subtopics: [
            { name: "Contributing", id: "contributing" },
            { name: "License", id: "license" },
            { name: "Support", id: "support" },
            { name: "Stay Connected", id: "stay-connected" },
        ],
    },
];

export default function Layout() {
    const [activeMenu, setActiveMenu] = useState(menuItems[0].id);
    const [activeTopic, setActiveTopic] = useState<string | null>(null);
    const [visibleSubtopics, setVisibleSubtopics] = useState<string | null>(null);
    const [activeSubtopic, setActiveSubtopic] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isTopicsOpen, setIsTopicsOpen] = useState(false);
    const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const applyHashNavigation = () => {
        const splittedUrl = window.location.hash.substring(1).split("#");
        if (splittedUrl?.length > 0 && splittedUrl[0] !== "") {
            const topic = topics.find((u) => u.id === splittedUrl[0]);
            if (topic) {
                const subTopic = topic.subtopics.find((u) => u.id === splittedUrl[1]);
                setActiveTopic(topic.id);
                setVisibleSubtopics(topic.id);
                setActiveSubtopic(subTopic?.id ?? null);
            }
        } else {
            setActiveTopic(topics[0].id);
            setVisibleSubtopics(topics[0].id); // Show subtopics of the first topic
            setActiveSubtopic(null);
        }
    };

    useEffect(() => {
        // Set the initial active topic and update it when navigating between docs hashes.
        applyHashNavigation();
        window.addEventListener("hashchange", applyHashNavigation);
        return () => window.removeEventListener("hashchange", applyHashNavigation);
    }, []);

    useEffect(() => {
        const target = activeSubtopic ?? activeTopic;
        if (target && contentRefs.current[target]) {
            contentRefs.current[target]!.scrollIntoView({
                behavior: "smooth",
            });
        }
    }, [activeSubtopic, activeTopic]);

    useEffect(() => {
        Prism.highlightAll();
    }, [activeSubtopic, activeTopic]);

    const handleDocumentationNavClick = (topic: string, subTopic?: string) => {
        setActiveTopic(topic);
        setVisibleSubtopics(topic);
        setActiveSubtopic(subTopic ?? null);
        setIsTopicsOpen(false);
        window.history.pushState(
            null,
            "",
            `#${topic}${subTopic ? `#${subTopic}` : ""}`
        );
    };

    const handleSubTopicItemNavClick = (topic: string, subTopic: string) => {
        handleDocumentationNavClick(topic, subTopic);
    };

    const handleTopicItemNavClick = (topic: string) => {
        handleDocumentationNavClick(topic);
    };

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <aside
                    className={`fixed z-20 w-64 bg-gray-500 text-white p-6 transform transition-transform ${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:relative lg:translate-x-0 lg:block pt-20`}
                    style={{
                        transitionProperty: "transform",
                        transitionDuration: "0.3s",
                        transitionTimingFunction: "ease-in-out",
                    }}
                >
                    <nav>
                        <Logo />
                        <br />
                        <ul>
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <Link href={item.href}>
                                        <button
                                            className={`block w-full text-left py-2 px-4 rounded hover:bg-gray-400 ${
                                                activeMenu === item.id ? "bg-gray-400" : ""
                                            }`}
                                            onClick={() => {
                                                setActiveMenu(item.id);
                                                setIsSidebarOpen(false);
                                                if (item.id === "getting-started") {
                                                    handleTopicItemNavClick("getting-started");
                                                }
                                            }}
                                        >
                                            {item.name}
                                        </button>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                <button
                    className="lg:hidden fixed top-4 left-4 z-30 bg-blue-600 text-white p-2 rounded-full shadow-lg"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? (
                        <XMarkIcon className="h-6 w-6" />
                    ) : (
                        <Bars3Icon className="h-6 w-6" />
                    )}
                </button>

                <div className="flex flex-1 overflow-hidden">
                    <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                        <div className="relative">
                            <span id="getting-started" className="sr-only" aria-hidden="true" />
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                {(activeTopic &&
                                    documentation_subtopic_content[activeTopic] && (
                                        <div
                                            ref={(el) => {
                                                if (activeTopic) contentRefs.current[activeTopic] = el;
                                            }}
                                        >
                                            {documentation_subtopic_content[activeTopic]}
                                            {visibleSubtopics === activeTopic &&
                                                topics
                                                    .find((topic) => topic.id === activeTopic)
                                                    ?.subtopics.map((subtopic) => (
                                                    <div
                                                        key={subtopic.id}
                                                        ref={(el) => {
                                                            if (subtopic.id)
                                                                contentRefs.current[subtopic.id] = el;
                                                        }}
                                                    >
                                                        {documentation_subtopic_content[subtopic.id]}
                                                    </div>
                                                ))}
                                        </div>
                                    )) || (
                                    <div>
                                        <h1 className="text-2xl font-bold mb-4">Not Found</h1>
                                        <p>
                                            Topic not found. Please select a valid topic from the
                                            sidebar.
                                        </p>
                                    </div>
                                )}
                            </div>

                            <button
                                className="lg:hidden fixed top-4 right-4 z-30 bg-blue-600 text-white p-2 rounded-full shadow-lg"
                                onClick={() => setIsTopicsOpen(!isTopicsOpen)}
                            >
                                {isTopicsOpen ? (
                                    <XMarkIcon className="h-6 w-6" />
                                ) : (
                                    <DocumentTextIcon className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </main>

                    <div
                        className={`fixed z-20 top-0 right-0 w-64 bg-white p-4 rounded-lg shadow-md transition-transform transform ${
                            isTopicsOpen ? "translate-x-0" : "translate-x-full"
                        } lg:relative lg:translate-x-0 lg:w-64 lg:ml-4 lg:block`}
                    >
                        <h2 className="text-lg font-semibold mb-4">Documentation</h2>
                        <nav>
                            <ul>
                                {topics.map((topic) => (
                                    <li key={topic.id}>
                                        <button
                                            className={`block w-full text-left py-2 px-4 rounded hover:bg-gray-200 ${
                                                activeTopic === topic.id ? "bg-gray-200" : ""
                                            }`}
                                            onClick={() => {
                                                handleTopicItemNavClick(topic.id);
                                            }}
                                        >
                                            {topic.name}
                                        </button>
                                        {visibleSubtopics === topic.id && topic.subtopics && (
                                            <ul className="ml-4 mt-2">
                                                {topic.subtopics.map((subtopic) => (
                                                    <li key={subtopic.id}>
                                                        <button
                                                            className={`block w-full text-left py-1 px-3 rounded hover:bg-gray-200 ${
                                                                activeSubtopic === subtopic.id
                                                                    ? "bg-gray-200"
                                                                    : ""
                                                            }`}
                                                            onClick={() => {
                                                                handleSubTopicItemNavClick(
                                                                    topic.id,
                                                                    subtopic.id
                                                                );
                                                            }}
                                                        >
                                                            {subtopic.name}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
