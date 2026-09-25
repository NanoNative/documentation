import isDxMovingAwayFromCode from "./is-dx-moving-away-from-code";
import devConsoleObservability from "./nano-developer-console-observability";
import changingRuntimeConfig from "./changing-nano-configuration-at-runtime";
import orchestrationToChoreography from "./from-orchestration-to-choreography";
import nativeJavaServices from "./why-nano-fits-native-java-services";
import railixPlayingAGame from "./what-if-building-systems-felt-like-playing-a-game";
import railwayApplicationPath from "./railway-oriented-programming";
import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
    isDxMovingAwayFromCode,
    railwayApplicationPath,
    railixPlayingAGame,
    orchestrationToChoreography,
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
