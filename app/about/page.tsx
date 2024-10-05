"use client";
import React from "react";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import LargeTestimonial from "@/components/large-testimonial";

export default function About() {
    return (
        <>
            <Header />
            <div className="flex flex-col min-h-screen">
                {/* Header Section */}
                <header className="bg-gradient-to-r from-nanoPink to-nanoBlue text-white py-8 text-center">
                    <h1 className="text-4xl font-bold">About Nano</h1>
                </header>

                {/* Main Content Section */}
                <div className="mx-auto max-w-6xl px-4 sm:px-6">

                    <div className="md:py-10">
                        <main className="flex-grow container mx-auto px-6 py-16">
                            {/* TODO: Introduction Section */}

                            {/* Vision & Mission Section */}
                            <section className="mb-16">
                                <h2 className="text-3xl font-semibold mb-4">Vision & Mission</h2>
                                <p className="text-lg text-gray-800 mb-4">
                                    Nano’s mission is to simplify the development of microservices by providing a minimalistic, fluent, and intuitive framework that reduces complexity while boosting performance. We are committed to offering tools that support developers in building fast, modern Java applications with minimal overhead. By embracing future technologies like GraalVM and non-blocking virtual threads, Nano ensures your services are scalable, lightning-fast, and ready for native execution.
                                </p>
                            </section>

                            {/* The Team Section */}
                            <LargeTestimonial />

                        </main>
                    </div>
                    </div>

                    {/* Footer */}
                    <Footer/>
                </div>
            </>
            );
            }
