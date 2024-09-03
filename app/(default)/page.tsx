import NanoBanner from "@/public/images/NanoBanner.svg";

export const metadata = {
    title: "NanoNative - Simplify Microservices with Lightweight Java Solutions",
    description: "NanoNative helps developers easily create lightweight microservices using modern Java, GraalVM compatibility, and non-blocking virtual threads.",
    keywords: "NanoNative, microservices, lightweight, Java, GraalVM, Project Loom, virtual threads, native executables",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
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

import Hero from "@/components/nano-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
