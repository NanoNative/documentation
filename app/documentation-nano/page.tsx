"use client"; // Mark this as a Client Component

import { useState } from 'react';
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const topics = [
    { name: 'Introduction', id: 'introduction' },
    { name: 'Getting Started', id: 'getting-started' },
    { name: 'Configuration', id: 'configuration' },
    { name: 'Usage', id: 'usage' },
    // Add more topics as needed
];

const content: { [key: string]: JSX.Element } = {
    introduction: (
        <div>
            <h1 className="text-2xl font-bold mb-4 ">Introduction</h1>
            <p>Welcome to the documentation! Here you'll find information about...</p>
        </div>
    ),
    'getting-started': (
        <div>
            <h1 className="text-2xl font-bold mb-4">Getting Started</h1>
            <p>To get started, first install the package by...</p>
        </div>
    ),
    configuration: (
        <div>
            <h1 className="text-2xl font-bold mb-4">Configuration</h1>
            <p>To configure the application, you need to...</p>
        </div>
    ),
    usage: (
        <div>
            <h1 className="text-2xl font-bold mb-4">Usage</h1>
            <p>Here's how you can use the application...</p>
        </div>
    ),
};

export default function Layout() {
    const [activeTopic, setActiveTopic] = useState(topics[0].id);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div>
            <Header />
            <div className="flex flex-col md:flex-row h-screen relative">
                {/* Sidebar */}
                <aside
                    className={`fixed md:relative z-10 md:z-auto w-64 bg-gradient-to-r from-nanoPink to-nanoBlue text-white p-6 md:translate-x-0 transition-transform ${
                        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:transform-none pt-20`}
                >
                    <nav>
                        <ul>
                            {topics.map((topic) => (
                                <li key={topic.id}>
                                    <button
                                        className={`block w-full text-left py-2 px-4 rounded hover:bg-gray-400 ${
                                            activeTopic === topic.id ? 'bg-gray-400' : ''
                                        }`}
                                        onClick={() => {
                                            setActiveTopic(topic.id);
                                            setIsSidebarOpen(false); // Close sidebar on topic selection
                                        }}
                                    >
                                        {topic.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Toggle Button for Sidebar (only visible on small screens) */}
                <button
                    className="md:hidden fixed top-16 left-4 z-20 bg-blue-600 text-white p-2 rounded"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
                </button>

                {/* Content Area */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto mt-16 md:mt-0">
                    {content[activeTopic] || (
                        <div>
                            <h1 className="text-2xl font-bold mb-4">Not Found</h1>
                            <p>Topic not found. Please select a valid topic from the sidebar.</p>
                        </div>
                    )}
                </main>
            </div>
            <Footer />
        </div>
    );
}
