"use client"; // Mark this as a Client Component

import {useState, useRef, useEffect} from 'react';
import Footer from "@/components/ui/footer";
import {Bars3Icon, XMarkIcon, DocumentTextIcon} from '@heroicons/react/24/outline';
import Link from "next/link";
import Logo from "@/components/ui/logo"; // Use Heroicons for better icons
import Prism from 'prismjs';
import 'prismjs/components/prism-java';
import documentation_subtopic_content from './documentationContent';

// Simulated menu items that would typically be in the header
const menuItems = [
    {name: 'Home', id: 'home', href: '/'},
    {name: 'Getting Started', id: 'getting-started', href: '/#nano_features'},
    {name: 'Documentation', id: 'documentation', href: '/documentation-nano'},
    {name: 'Features', id: 'features', href: '/#nano_features'},
    {name: 'About', id: 'about', href: '/#team-details'},
    {name: 'Community', id: 'community', href: '/'},
];

const topics = [
    {
        name: 'Introduction',
        id: 'introduction',
        subtopics: [],
    },
    {
        name: 'Core Concept',
        id: 'core-concept',
        subtopics: [
            {name: 'Concept', id: 'concept'},
            {name: 'Modern and Fluent Design 🚀', id: 'modern-and-fluent-design'},
            {name: 'No External Dependencies 🔒', id: 'no-external-dependencies'},
            {name: 'Minimal Resource Consumption 🌱', id: 'minimal-resource-consumption'},
            {name: 'Non-Blocking Virtual Threads 🧵', id: 'non-blocking-virtual-threads'},
            {name: 'GraalVM Compatibility ⚡', id: 'graalvm-compatibility'},
            {name: 'Extensible and Open 🪶', id: 'extensible-and-open'},
            {name: 'Modular Design 🧩', id: 'modular-design'},
            {name: 'Service-Based Architecture 📊', id: 'service-based-architecture'},
            {name: 'Flexible Object Mapping 🔄', id: 'flexible-object-mapping'},
            {name: 'Configuration Management ⚙️', id: 'configuration-management'},

        ],
    },
    {
        name: 'Mechanics',
        id: 'mechanics',
        subtopics: [
            {name: 'Error Handling', id: 'error-handling'},
            {name: 'Registers', id: 'registers'},
            {name: 'Integrations', id: 'integrations'},
            {name: 'Code Examples', id: 'code-examples'},
        ],
    },
    {
        name: 'Getting Started',
        id: 'getting-started',
        subtopics: [
            {name: 'Maven example', id: 'maven-example'},
            {name: 'Gradle example', id: 'gradle-example'},
        ],
    },
    {
        name: 'Build Nano',
        id: 'build-nano',
        subtopics: [],
    },
    {
        name: 'Benefits of Nano',
        id: 'benefits-of-nano',
        subtopics: [
            {name: 'Contributing', id: 'contributing'},
            {name: 'License', id: 'license'},
            {name: 'Support', id: 'support'},
            {name: 'Stay Connected', id: 'stay-connected'},
        ],
    },
    // Add more topics and subtopics as needed
];


export default function Layout() {
    const [activeMenu, setActiveMenu] = useState(menuItems[0].id); // Tracks the active header menu item
    const [activeTopic, setActiveTopic] = useState(topics[0].id);
    const [activeSubtopic, setActiveSubtopic] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isTopicsOpen, setIsTopicsOpen] = useState(false); // For mobile view: Topics/Subtopics visibility

    const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    // Scroll to the subtopic when selected
    useEffect(() => {
        if (activeSubtopic && contentRefs.current[activeSubtopic]) {
            contentRefs.current[activeSubtopic]!.scrollIntoView({behavior: "smooth"});
        }
    }, [activeSubtopic]);
    useEffect(() => {
        Prism.highlightAll();
    }, [activeSubtopic, activeTopic]);
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                {/* Left Sidebar with Header Menu */}
                <aside
                    className={`fixed md:relative z-20 w-64 bg-gray-500 text-white p-6 md:translate-x-0 transition-transform ${
                        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:transform-none pt-20 md:block`}
                >
                    <nav>
                        <Logo/>
                        <br/>
                        <ul>
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    {item.href ? (
                                        <Link href={item.href}>
                                            <button
                                                className={`block w-full text-left py-2 px-4 rounded hover:bg-gray-400 ${
                                                    activeMenu === item.id ? 'bg-gray-400' : ''
                                                }`}
                                                onClick={() => {
                                                    setActiveMenu(item.id);
                                                    setIsSidebarOpen(false); // Close sidebar on menu selection
                                                }}
                                            >
                                                {item.name}
                                            </button>
                                        </Link>
                                    ) : (
                                        item.name
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Toggle Button for Left Sidebar (only visible on small screens) */}
                <button
                    className="md:hidden fixed top-4 left-4 z-30 bg-blue-600 text-white p-2 rounded-full shadow-lg"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? <XMarkIcon className="h-6 w-6"/> : <Bars3Icon className="h-6 w-6"/>}
                </button>

                <div className="flex flex-1 overflow-hidden">
                    {/* Content Area */}
                    <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                        <div className="relative">
                            {/* Documentation Content */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                {documentation_subtopic_content[activeTopic] && (
                                    <div ref={(el) => (contentRefs.current[activeTopic] = el)}>
                                        {documentation_subtopic_content[activeTopic]}
                                        {topics
                                            .find((topic) => topic.id === activeTopic)
                                            ?.subtopics.map((subtopic) => (
                                                <div key={subtopic.id}
                                                     ref={(el) => (contentRefs.current[subtopic.id] = el)}>
                                                    {documentation_subtopic_content[subtopic.id]}
                                                </div>
                                            ))}
                                    </div>
                                ) || (
                                    <div>
                                        <h1 className="text-2xl font-bold mb-4">Not Found</h1>
                                        <p>Topic not found. Please select a valid topic from the sidebar.</p>
                                    </div>
                                )}
                            </div>

                            {/* Toggle Button for Right Sidebar (only visible on small screens) */}
                            <button
                                className="md:hidden fixed top-4 right-4 z-30 bg-blue-600 text-white p-2 rounded-full shadow-lg"
                                onClick={() => setIsTopicsOpen(!isTopicsOpen)}
                            >
                                {isTopicsOpen ? <XMarkIcon className="h-6 w-6"/> :
                                    <DocumentTextIcon className="h-6 w-6"/>}
                            </button>
                        </div>
                    </main>

                    {/* Right Panel with Documentation Topics and Subtopics */}
                    <div
                        className={`fixed z-20 top-0 right-0 w-64 bg-white p-4 rounded-lg shadow-md transition-transform transform ${
                            isTopicsOpen ? 'translate-x-0' : 'translate-x-full'
                        } md:relative md:translate-x-0 md:w-64 md:ml-4 md:block`}
                    >
                        <h2 className="text-lg font-semibold mb-4">Documentation</h2>
                        <nav>
                            <ul>
                                {topics.map((topic) => (
                                    <li key={topic.id}>
                                        <button
                                            className={`block w-full text-left py-2 px-4 rounded hover:bg-gray-200 ${
                                                activeTopic === topic.id ? 'bg-gray-200' : ''
                                            }`}
                                            onClick={() => {
                                                setActiveTopic(topic.id);
                                                setActiveSubtopic(null); // Reset subtopic when a new topic is selected
                                                setIsTopicsOpen(false); // Close topics sidebar on mobile
                                            }}
                                        >
                                            {topic.name}
                                        </button>
                                        {activeTopic === topic.id && topic.subtopics && (
                                            <ul className="ml-4 mt-2">
                                                {topic.subtopics.map((subtopic) => (
                                                    <li key={subtopic.id}>
                                                        <button
                                                            className={`block w-full text-left py-1 px-3 rounded hover:bg-gray-200 ${
                                                                activeSubtopic === subtopic.id
                                                                    ? 'bg-gray-200'
                                                                    : ''
                                                            }`}
                                                            onClick={() => {
                                                                setActiveSubtopic(subtopic.id);
                                                                setIsTopicsOpen(false); // Close topics sidebar on mobile
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
            <Footer/>
        </>
    );
}
