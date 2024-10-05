"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <header className="w-full z-30 bg-white shadow-md">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="flex h-14 items-center justify-between">
                    {/* Site branding */}
                    <Logo />

                    {/* Desktop menu */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-sm font-semibold leading-6 text-nanoBlack">
                            Home
                        </Link>
                        <Link href="/documentation-nano" className="text-sm font-semibold leading-6 text-nanoBlack">
                            Getting Started
                        </Link>
                        <Link href="/documentation-nano" className="text-sm font-semibold leading-6 text-nanoBlack">
                            Documentation
                        </Link>
                        <Link href="/#nano_features" className="text-sm font-semibold leading-6 text-nanoBlack">
                            Features
                        </Link>
                        <Link href="/about" className="text-sm font-semibold leading-6 text-nanoBlack">
                            About
                        </Link>
                        <Link href="/community" className="text-sm font-semibold leading-6 text-nanoBlack">
                            Community
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                        aria-expanded={menuOpen ? "true" : "false"}
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                        }}
                    >
                        <span className="sr-only">Open main menu</span>
                        {menuOpen ? (
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>

                    {/* Mobile menu */}
                    {menuOpen && (
                        <nav className="absolute top-14 left-0 right-0 z-50 bg-white shadow-lg md:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                <Link href="#nano_features" className="block px-3 py-2 rounded-md text-base font-medium text-nanoBlack hover:bg-gray-50">
                                    Home
                                </Link>
                                <Link href="#nano_features" className="block px-3 py-2 rounded-md text-base font-medium text-nanoBlack hover:bg-gray-50">
                                    Getting Started
                                </Link>
                                <Link href="/documentation-nano" className="block px-3 py-2 rounded-md text-base font-medium text-nanoBlack hover:bg-gray-50">
                                    Documentation
                                </Link>
                                <Link href="#nano_features" className="block px-3 py-2 rounded-md text-base font-medium text-nanoBlack hover:bg-gray-50">
                                    Features
                                </Link>
                                <Link href="#team-details" className="block px-3 py-2 rounded-md text-base font-medium text-nanoBlack hover:bg-gray-50">
                                    About
                                </Link>
                                <Link href="#nano_features" className="block px-3 py-2 rounded-md text-base font-medium text-nanoBlack hover:bg-gray-50">
                                    Community
                                </Link>
                            </div>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
}
