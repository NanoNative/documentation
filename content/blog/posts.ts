import devConsoleObservability from "./nano-developer-console-observability";
import changingRuntimeConfig from "./changing-nano-configuration-at-runtime";
import servicesAreConnectors from "./nano-services-are-connectors";
import thinkingInEvents from "./thinking-in-events-not-controllers";
import nativeJavaServices from "./why-nano-fits-native-java-services";
import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
    thinkingInEvents,
    servicesAreConnectors,
    changingRuntimeConfig,
    nativeJavaServices,
    devConsoleObservability,
].sort(
    (first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
);

export function getBlogPost(slug: string) {
    return blogPosts.find((post) => post.slug === slug);
}
