"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  const content = {
    introduction: (
        <div>
          <h1 className="text-2xl font-bold mb-4">Introduction</h1>
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

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (<header>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]*/}
        <div className="relative flex h-14 items-center">

          {/* Site branding */}
          <Logo/>
          {/*<div className="flex flex-1 items-center">*/}
          {/*  */}
          {/*</div>*/}


          {/* Desktop sign in links */}
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <a href="#nano_features" className="text-sm font-semibold leading-6 text-nanoBlack mx-4">Home</a>
            <a href="#nano_features" className="text-sm font-semibold leading-6 text-nanoBlack mx-4">Getting Started</a>
              <Link href="/documentation-nano" className="text-sm font-semibold leading-6 text-nanoBlack mx-4">Documentation</Link>
            <a href="#nano_features" className="text-sm font-semibold leading-6 text-nanoBlack mx-4">Features</a>
            <a href="#team-details" className="text-sm font-semibold leading-6 text-nanoBlack mx-4">About</a>
            <a href="#nano_features" className="text-sm font-semibold leading-6 text-nanoBlack mx-4">Community</a>


            {/*<ul className="flex flex-1 items-center justify-end gap-3">*/}
            {/*  <li>*/}
            {/*    <Link*/}
            {/*        href=""*/}
            {/*        className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"*/}
            {/*    >*/}
            {/*      Contact*/}
            {/*    </Link>*/}
            {/*  </li>*/}
            {/*</ul>*/}
          </nav>
        </div>
      </div>
      </header>
  )
};

