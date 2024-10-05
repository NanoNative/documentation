"use client";
import React from "react";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function Community() {
    return (
        <>
            <Header />
            <div className="flex flex-col min-h-screen">
                {/* Header Section */}
                <header className="bg-gradient-to-r from-nanoPink to-nanoBlue text-white py-8 text-center">
                    <h1 className="text-4xl font-bold">Join the Nano Community</h1>
                </header>

                {/* Main Content Section */}
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="md:py-10">
                        <main className="flex-grow container mx-auto px-6 py-16">
                            {/* Introduction Section */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-semibold mb-4">Stay Connected with Us</h2>
                                <p className="text-lg text-gray-800 mb-4">
                                    We believe that a strong, vibrant community is key to Nano’s growth and success. Stay updated with the latest news, contribute your ideas, or seek help by connecting with us on your favorite platforms. Join us in shaping the future of Nano!
                                </p>
                            </section>

                            {/* Community Platforms Section */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-semibold mb-8">Join Our Community</h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {/* Slack */}
                                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="h-16 w-16 mx-auto mb-4">
                                            <path
                                                d="M5.11 15.64a2.55 2.55 0 1 1-2.54 2.55h2.54v-2.55Zm1.27 0h5.1a1.27 1.27 0 0 1 0 2.54H6.38a1.27 1.27 0 0 1-1.27-1.27v-.01a1.27 1.27 0 0 1 1.27-1.26h0Zm2.54-1.27a2.55 2.55 0 1 1 2.54-2.55v2.54h-2.54ZM7.39 12.82H2.54a1.27 1.27 0 0 1 0-2.54h4.85a1.27 1.27 0 0 1 0 2.54ZM15.64 8.7a2.55 2.55 0 1 1 2.54-2.55h-2.54v2.55Zm-1.27 0h-5.1a1.27 1.27 0 0 1 0-2.54h5.1a1.27 1.27 0 0 1 0 2.54Zm-2.54 1.28a2.55 2.55 0 1 1-2.54 2.55v-2.55h2.54ZM16.35 11.18a1.27 1.27 0 1 1 0-2.54h4.84a1.27 1.27 0 0 1 0 2.54h-4.84ZM5.11 5.11a2.55 2.55 0 1 1 2.54 2.54h-2.54V5.11Zm1.27 0h5.1a1.27 1.27 0 0 1 0 2.54H6.38a1.27 1.27 0 0 1-1.27-1.27v-.01a1.27 1.27 0 0 1 1.27-1.26h0ZM18.89 18.89a2.55 2.55 0 1 1-2.54-2.54h2.54v2.54Zm-1.27 0h-5.1a1.27 1.27 0 1 1 0-2.54h5.1a1.27 1.27 0 0 1 0 2.54Zm-2.54-1.27a2.55 2.55 0 1 1-2.54-2.54v2.54h2.54ZM16.35 16.35a1.27 1.27 0 1 1 0-2.54h4.84a1.27 1.27 0 1 1 0 2.54h-4.84Z"/>
                                        </svg>

                                        <h3 className="text-xl font-semibold mb-4">Slack</h3>
                                        <p className="text-gray-700 mb-4">
                                            Join our Slack community to engage with fellow developers, ask questions,
                                            and share your knowledge.
                                        </p>
                                        <a
                                            href="https://join.slack.com/t/nano-native/shared_invite/zt-2o1nshr0i-9R76D8vNLo4DT52hi7YU8w"
                                            target="_blank"
                                            className="inline-block bg-nanoBlue text-white px-6 py-2 rounded-full transition-colors hover:bg-nanoPink">
                                            Join Slack
                                        </a>
                                    </div>

                                    {/* GitHub */}
                                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="h-16 w-16 mx-auto mb-4">
                                            <path
                                                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.207 11.385.6.111.793-.261.793-.579 0-.285-.011-1.243-.016-2.255-3.338.725-4.043-1.61-4.043-1.61-.547-1.388-1.335-1.759-1.335-1.759-1.091-.744.082-.729.082-.729 1.205.085 1.84 1.237 1.84 1.237 1.072 1.837 2.809 1.306 3.492.999.109-.776.419-1.307.762-1.608-2.665-.303-5.467-1.334-5.467-5.932 0-1.31.467-2.381 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.009-.323 3.3 1.23a11.523 11.523 0 0 1 3.008-.404c1.02.005 2.047.138 3.007.404 2.291-1.554 3.299-1.23 3.299-1.23.655 1.653.243 2.873.12 3.176.769.839 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.479 5.92.43.371.815 1.104.815 2.223 0 1.606-.015 2.904-.015 3.297 0 .32.192.694.8.577C20.565 21.798 24 17.298 24 12c0-6.63-5.37-12-12-12Z"/>
                                        </svg>

                                        <h3 className="text-xl font-semibold mb-4">GitHub</h3>
                                        <p className="text-gray-700 mb-4">
                                            Contribute to Nano by checking out our GitHub repository. We welcome new
                                            contributors to help improve the library.
                                        </p>
                                        <a
                                            href="https://github.com/NanoNative/nano"
                                            target="_blank"
                                            className="inline-block bg-nanoBlue text-white px-6 py-2 rounded-full transition-colors hover:bg-nanoPink">
                                            Visit GitHub
                                        </a>
                                    </div>

                                    {/* Twitter */}
                                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="h-16 w-16 mx-auto mb-4">
                                            <path
                                                d="M23.954 4.569c-.885.39-1.83.654-2.825.775a4.937 4.937 0 0 0 2.163-2.723 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.955 13.955 0 0 1 1.64 3.164a4.916 4.916 0 0 0 1.524 6.573 4.897 4.897 0 0 1-2.229-.616v.061a4.916 4.916 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.085 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.92 13.92 0 0 0 7.548 2.213c9.057 0 14.01-7.514 14.01-14.01 0-.213-.005-.426-.014-.637a10.012 10.012 0 0 0 2.46-2.549z"/>
                                        </svg>

                                        <h3 className="text-xl font-semibold mb-4">Twitter</h3>
                                        <p className="text-gray-700 mb-4">
                                            Follow us on Twitter to stay up-to-date on the latest news, updates, and
                                            announcements from the Nano team.
                                        </p>
                                        <a
                                            href="https://x.com/YunaMorgenstern"
                                            target="_blank"
                                            className="inline-block bg-nanoBlue text-white px-6 py-2 rounded-full transition-colors hover:bg-nanoPink">
                                            Follow Us
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>

                {/* Footer */}
                <Footer/>
            </div>
        </>
    );
}
