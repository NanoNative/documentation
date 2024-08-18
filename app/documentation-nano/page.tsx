"use client"; // Mark this as a Client Component

import { useState, useRef, useEffect } from 'react';
import Footer from "@/components/ui/footer";
import { Bars3Icon, XMarkIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import Logo from "@/components/ui/logo"; // Use Heroicons for better icons

// Simulated menu items that would typically be in the header
const menuItems = [
    { name: 'Home', id: 'home', href: '/' },
    { name: 'Getting Started', id: 'getting-started', href: '/#nano_features'  },
    { name: 'Documentation', id: 'documentation', href: '/documentation-nano'  },
    { name: 'Features', id: 'features', href: '/#nano_features'  },
    { name: 'About', id: 'about', href: '/#team-details'  },
    { name: 'Community', id: 'community', href: '/'  },
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
            { name: 'Concept', id: 'concept' },
            { name: 'Modern and Fluent Design 🚀', id: 'modern-and-fluent-design' },
            { name: 'No External Dependencies 🔒', id: 'no-external-dependencies' },
            { name: 'Minimal Resource Consumption 🌱', id: 'minimal-resource-consumption' },
            { name: 'Non-Blocking Virtual Threads 🧵', id: 'non-blocking-virtual-threads' },
            { name: 'GraalVM Compatibility ⚡', id: 'graalvm-compatibility' },
            { name: 'Extensible and Open 🪶', id: 'extensible-and-open' },
            { name: 'Modular Design 🧩', id: 'modular-design' },
            { name: 'Service-Based Architecture 📊', id: 'service-based-architecture' },
            { name: 'Flexible Object Mapping 🔄', id: 'flexible-object-mapping' },
            { name: 'Configuration Management ⚙️', id: 'configuration-management' },

        ],
    },
    {
        name: 'Getting Started',
        id: 'getting-started',
        subtopics: [
            { name: 'Installation', id: 'installation' },
            { name: 'Setup', id: 'setup' },
        ],
    },
    {
        name: 'Configuration',
        id: 'configuration',
        subtopics: [
            { name: 'Basic Config', id: 'basic-config' },
            { name: 'Advanced Config', id: 'advanced-config' },
        ],
    },
    {
        name: 'Usage',
        id: 'usage',
        subtopics: [
            { name: 'Examples', id: 'examples' },
            { name: 'Best Practices', id: 'best-practices' },
        ],
    },
    // Add more topics and subtopics as needed
];

const content: { [key: string]: JSX.Element } = {
    introduction: (
        <div id="introduction">
            <h1 className="text-2xl font-bold mb-4">Introduction</h1>
            <br/>
            <h2 className="text-1xl font-bold mb-4">Back to basics and forget about frameworks!</h2>
            <p>Nano is a lightweight concept which makes it easier for developers to write microservices in functional,
                fluent,
                chaining, plain, modern Java with a nano footprint. Nano is also designed to be fully compilable with
                &nbsp;<a className="nano-link" href="https://www.graalvm.org/" target="_blank" rel="noopener noreferrer">GraalVM</a>
                to create native executables. To enhance efficiency and performance, Nano utilizes non-blocking virtual
                threads from
                &nbsp;<a className="nano-link" href="https://jdk.java.net/loom/" target="_blank"
                         rel="noopener noreferrer">Project Loom</a>.
            </p>
        </div>
    ),
    overview: (
        <div id="overview">
            <h1 className="text-2xl font-bold mb-4">Overview</h1>
            <p>This section provides an overview of the project...</p>
        </div>
    ),
    installation: (
        <div id="installation">
            <h1 className="text-2xl font-bold mb-4">Installation</h1>
            <p>To install the package, use the following command...</p>
        </div>
    ),
    setup: (
        <div id="setup">
            <h1 className="text-2xl font-bold mb-4">Setup</h1>
            <p>Setup instructions go here...</p>
        </div>
    ),
    // Add more subtopic content as needed
    'getting-started': (
        <div id="getting-started">
            <h1 className="text-2xl font-bold mb-4">Getting Started</h1>
            <p>To get started, first install the package by...</p>
        </div>
    ),
    configuration: (
        <div id="configuration">
            <h1 className="text-2xl font-bold mb-4">Configuration</h1>
            <p>To configure the application, you need to...</p>
        </div>
    ),
    usage: (
        <div id="usage">
            <h1 className="text-2xl font-bold mb-4">Usage</h1>
            <p>Here's how you can use the application...</p>
        </div>
    ),
    'core-concept': (
        <div id="core-concept">
            <h1 className="text-2xl font-bold mb-4">Core Concept</h1>
            <p>Nano handles threads for you and provides a basic construct for event-driven architecture.
                It's providing a simple way to write microservices in a functional fluent and chaining style.
                Objects are less needed thanks to the underlying &nbsp;<a className="nano-link" href="https://github.com/YunaBraska/type-map"
                                                                          target="_blank" rel="noopener noreferrer">TypeMap</a>. Nano provides full access to all
                internal components, resulting in very few private methods or fields.</p>
        </div>
    ),
    concept: (
        <div id="concept">
            <br/><br/>
            <p>Nano is a minimalist standalone library designed to facilitate the creation of microservices
                using plain, modern Java. Nano is a tool, not a framework, and it emphasizes simplicity,
                security, and efficiency.</p>
        </div>
    ),
    'modern-and-fluent-design': (
        <div id="modern-and-fluent-design">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Modern and Fluent Design 🚀</h1>
            <p>Nano leverages fluent chaining and functional programming styles to create a syntax that resembles
                a stateless scripting language. By avoiding annotations and other “black magic” Nano maintains
                transparency and simplicity in its codebase. Fluent and chaining means, there are no <span
                    className="bg-gray-200 px-1 rounded">get</span> and&nbsp;
                <span className="bg-gray-200 px-1 rounded">set</span> prefixes and no
                <span className="bg-gray-200 px-1 rounded">void</span> returns for methods.
            </p>

        </div>
    ),
    'no-external-dependencies': (
        <div id="no-external-dependencies">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">No External Dependencies 🔒</h1>
            <p>Nano is built without any foreign dependencies, ensuring a lean, secure library free from common
                vulnerabilities and excessive dependencies. This results in a smaller, faster, and more secure codebase.
                You only need to trust and know the license agreements of Nano.</p>
        </div>
    ),
    'minimal-resource-consumption': (
        <div id="minimal-resource-consumption">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Minimal Resource Consumption 🌱</h1>
            <p>Nano is engineered for a minimal environmental footprint, utilizing fewer resources
                and making garbage collection more efficient due to its functional programming style.</p>
        </div>
    ),
    'non-blocking-virtual-threads': (
        <div id="non-blocking-virtual-threads">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Non-Blocking Virtual Threads 🧵</h1>
            <p>Nano utilizes non-blocking virtual threads from <a className="nano-link" href="https://jdk.java.net/loom/" target="_blank"
                                                                        rel="noopener noreferrer">Project Loom</a> to enhance efficiency and performance.
                These threads maximize CPU utilization without blocking the main thread, eliminating the need for
                manual thread limit settings. Note that Nano cannot control Java’s built-in <span className="bg-gray-200 px-1 rounded">ForkJoinPool</span> used for
                <span className="bg-gray-200 px-1 rounded">java.util.concurrent</span> objects like streams. To optimize performance, it is recommended to set the
                Java property to something like this <br/><span className="bg-gray-200 px-1 rounded">-Djava.util.concurrent.ForkJoinPool.common.parallelism=100</span>.
                in case of high parallelism.</p>
        </div>
    ),
    'graalvm-compatibility': (
        <div id="graalvm-compatibility">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">GraalVM Compatibility ⚡</h1>
            <p>Nano is fully compatible with <a className="nano-link" href="https://www.graalvm.org/"
                                                target="_blank" rel="noopener noreferrer">GraalVM</a>, allowing you to
                compile native executables that do not require a JVM to run.
                This feature is particularly useful in containerized and serverless environments. Nano avoids reflection and dynamic
                class loading, ensuring seamless <a className="nano-link" href="https://www.graalvm.org/"
                                                    target="_blank" rel="noopener noreferrer">GraalVM</a> integration without additional configuration.</p>
        </div>
    ),
    'extensible-and-open': (
        <div id="extensible-and-open">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Extensible and Open 🪶</h1>
            <p>All Nano functions and classes are <span className="bg-gray-200 px-1 rounded">public</span> or <span className="bg-gray-200 px-1 rounded">protected</span>
                , allowing developers to extend or modify the library
                as needed. This breaks the concept of immutable objects, but we think it's more important to be able to extend and
                modify Nano than closing it. Means, every developer is responsible for the own code! We still encourages contributions and improvements from the community.</p>
        </div>
    ),
    'modular-design': (
        <div id="modular-design">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Modular Design 🧩</h1>
            <p>Nano’s <span className="bg-gray-200 px-1 rounded">Event</span> system enables decoupling of functions, plugin creation (<span className="bg-gray-200 px-1 rounded">Services</span>), and function interception.
                For example, you can globally control and respond to every error that occurs, similar to a global <span className="bg-gray-200 px-1 rounded">Controller Advice</span>.
                With that its also easy to change configurations on the fly. This modular design allows services, such as the built-in
                    <span className="bg-gray-200 px-1 rounded">HttpService</span> and <span className="bg-gray-200 px-1 rounded">MetricService</span>, to operate independently while still being able to interact when started.</p>
        </div>
    ),
    'service-based-architecture': (
        <div id="service-based-architecture">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Service-Based Architecture 📊</h1>
            <p>(<span className="bg-gray-200 px-1 rounded">Services</span>) in Nano function as plugins or extensions, executed only when explicitly added to Nano programmatically.
                This approach simplifies testing, as services and components can be tested independently without the need for mocking or stubbing.
                You execute only what you define, avoiding the pitfalls of auto-applying dependencies.</p>
        </div>
    ),
    'flexible-object-mapping': (
        <div id="flexible-object-mapping">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Flexible Object Mapping 🔄</h1>
            <p>Nano’s built-in TypeConverter eliminates the need for custom objects by enabling easy conversion of <span
                className="bg-gray-200 px-1 rounded">JSON</span>, <span className="bg-gray-200 px-1 rounded">XML</span>,
                and other simple Java objects. For example, HTTP requests can be converted to <span
                    className="bg-gray-200 px-1 rounded">TypeInfo</span>, <span
                    className="bg-gray-200 px-1 rounded">TypeMap</span> or <span
                    className="bg-gray-200 px-1 rounded">TypeList</span>,
                which lazily convert fields to the requested type. See <a className="nano-link"
                                                                          href="https://github.com/YunaBraska/type-map"
                                                                          target="_blank"
                                                                          rel="noopener noreferrer">TypeMap</a> for more
                information. If an object cannot
                be converted,
                it is straightforward to register a custom type conversion. These <a className="nano-link"
                                                                                     href="https://github.com/YunaBraska/type-map"
                                                                                     target="_blank"
                                                                                     rel="noopener noreferrer">TypeMaps</a> and
                TypeLists are used extensively,
                such as in events and the context.</p>
        </div>
    ),
    'configuration-management': (
        <div id="configuration-management">
            <br/><br/>
            <h1 className="text-2xl font-bold mb-4">Configuration Management ⚙️</h1>
            <p>Nano uses a <span className="bg-gray-200 px-1 rounded">Context</span> object to manage logging, tracing and configurations. Nano reads property files
                and profiled properties which all end up in the <span className="bg-gray-200 px-1 rounded">Context</span> Object. The properties can be converted to the required types as needed.
                This eliminates the need for custom configuration objects.</p>
        </div>
    ),
};

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
            contentRefs.current[activeSubtopic]!.scrollIntoView({ behavior: "smooth" });
        }
    }, [activeSubtopic]);

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
                        <Logo />
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
                    {isSidebarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </button>

                <div className="flex flex-1 overflow-hidden">
                    {/* Content Area */}
                    <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                        <div className="relative">
                            {/* Documentation Content */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                {content[activeTopic] && (
                                    <div ref={(el) => (contentRefs.current[activeTopic] = el)}>
                                        {content[activeTopic]}
                                        {topics
                                            .find((topic) => topic.id === activeTopic)
                                            ?.subtopics.map((subtopic) => (
                                                <div key={subtopic.id} ref={(el) => (contentRefs.current[subtopic.id] = el)}>
                                                    {content[subtopic.id]}
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
                            {isTopicsOpen ? <XMarkIcon className="h-6 w-6" /> : <DocumentTextIcon className="h-6 w-6" />}
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
        <Footer />
    </>
    );}
