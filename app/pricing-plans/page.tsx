"use client";
import React from "react";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function PricingPlans() {
    return (
        <>
            <Header/>
            <div className="flex flex-col min-h-screen">
                {/* Header Section */}
                <header className="bg-gradient-to-r from-nanoPink to-nanoBlue text-white py-8 text-center">
                    <h1 className="text-4xl font-bold">Pricing & Plans</h1>
                </header>

                {/* Main Content Section */}
                <main className="flex-grow container mx-auto px-6 py-16">
                    {/* Pricing Plan Card */}
                    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-semibold mb-4">The "Nothing" Plan</h2>
                        <p className="text-xl mb-2 font-semibold">Cost: €0.00</p>
                        <p className="text-gray-600 mb-6">
                            Features: Infinite emptiness. Zero charges. Unlimited satisfaction.
                        </p>

                        <p className="text-lg text-gray-800 mb-4">
                            Why bother with tedious transactions or confusing numbers when you can have… nothing?
                            Yes, nothing. No fees. No fine print. No annoying subscription reminders.
                            Just pure, unadulterated absence of cost.
                        </p>

                        <p className="text-lg text-gray-800">
                            Why pay for things when you can bask in the glorious void?
                            Join us, where nothing is everything, and everything costs you nothing.
                        </p>

                        <p className="text-center mt-12 text-blue-600 font-semibold">
                            You're welcome.
                        </p>
                    </div>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
