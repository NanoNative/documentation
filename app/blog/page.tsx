import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { blogPosts } from "@/content/blog/posts";
import { externalLinks, siteLinks } from "@/constants/links";
import NanoBanner from "@/public/images/NanoBanner.svg";

export const metadata = {
    title: "NanoNative Blog",
    description: "Technical articles, release notes and engineering notes from NanoNative.",
    openGraph: {
        title: "NanoNative Blog",
        description: "Technical articles, release notes and engineering notes from NanoNative.",
        url: `${externalLinks.site}${siteLinks.blog.slice(1)}`,
        type: "website",
        images: NanoBanner,
    },
    twitter: {
        card: "summary_large_image",
        title: "NanoNative Blog",
        description: "Technical articles, release notes and engineering notes from NanoNative.",
        images: NanoBanner,
    },
};

function formatDate(date: string) {
    return new Intl.DateTimeFormat("en", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date(`${date}T00:00:00Z`));
}

export default function BlogPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                <section className="border-b border-gray-200 bg-gray-50">
                    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-10">
                        <h1 className="text-3xl font-semibold text-gray-950 md:text-4xl">NanoNative Blog</h1>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-10">
                    <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post) => (
                            <article
                                key={post.slug}
                                className="group"
                            >
                                <Link href={`${siteLinks.blog}/${post.slug}`} className="block">
                                    <div className="nano-dark-bg relative aspect-[16/9] overflow-hidden rounded">
                                        <Image
                                            src={post.coverImage}
                                            alt={post.coverAlt}
                                            fill
                                            className="object-cover transition duration-300 group-hover:scale-[1.02]"
                                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        />
                                    </div>
                                    <div className="pt-4">
                                        <div className="mb-2 flex flex-wrap gap-2">
                                            {post.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs font-semibold uppercase tracking-wide text-nanoLinkBlue"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h2 className="text-xl font-semibold leading-snug text-gray-950 group-hover:text-nanoLinkBlue">
                                            {post.title}
                                        </h2>
                                        <p className="mt-2 text-sm leading-6 text-gray-600">{post.description}</p>
                                        <div className="mt-4 text-xs text-gray-500">
                                            {formatDate(post.date)} · {post.readingTime}
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <Footer border />
        </>
    );
}
