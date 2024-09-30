import "./css/style.css";

import { Inter } from "next/font/google";
import NanoBanner from "@/public/images/NanoBanner.svg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
    title: 'Nano Documentation',
    description: 'Documentation for the Nano framework, covering core concepts, mechanics, and getting started guides.',
    keywords: "NanoNative, microservices, lightweight, Java, GraalVM, Project Loom, virtual threads, native executables",
    robots: "index, follow",
    // viewport: "width=device-width, initial-scale=1.0",
    authors: [
        { "name": "NanoNative Team" },
        { "name": "Yuna Braska" }
    ],
    openGraph: {
        title: "NanoNative - Simplify Microservices with Lightweight Java Solutions",
        description: "NanoNative enables effortless microservice development with modern Java, optimized for native executables.",
        url: "https://nanonative.org/",
        type: "website",
        images: NanoBanner,
    },
    twitter: {
        card: "summary_large_image",
        title: "NanoNative - Simplify Microservices with Lightweight Java Solutions",
        description: "NanoNative enables effortless microservice development with modern Java, optimized for native executables.",
        images: NanoBanner,  // Replace with your actual image path
    }
};

export const viewport = {
    width: 'device-width',
    initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
