import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CopyPostLink from "@/components/blog/copy-post-link";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { blogPosts, getBlogPost } from "@/content/blog/posts";
import { externalLinks, siteLinks } from "@/constants/links";

type BlogPostPageProps = {
    params: {
        slug: string;
    };
};

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
    const post = getBlogPost(params.slug);

    if (!post) {
        return {
            title: "Blog post not found",
        };
    }

    const postImage = {
        url: `/images/blog/${post.slug}/cover.png`,
        width: 1200,
        height: 630,
        alt: post.coverAlt,
    };

    return {
        title: `${post.title} | NanoNative Blog`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            url: `${externalLinks.site}${siteLinks.blog.slice(1)}/${post.slug}/`,
            type: "article",
            images: [postImage],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [postImage],
        },
    };
}

function formatDate(date: string) {
    return new Intl.DateTimeFormat("en", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date(`${date}T00:00:00Z`));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post = getBlogPost(params.slug);

    if (!post) {
        notFound();
    }

    const postUrl = `${externalLinks.site}${siteLinks.blog.slice(1)}/${post.slug}/`;

    return (
        <>
            <Header />
            <main className="bg-white">
                <article>
                    <header className="border-b border-gray-200 bg-gray-50">
                        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 md:py-10">
                            <Link
                                href={siteLinks.blog}
                                className="text-sm font-semibold text-nanoLinkBlue hover:text-blue-700"
                            >
                                Blog
                            </Link>
                            <h1 className="mt-4 text-3xl font-semibold text-gray-950 md:text-4xl">{post.title}</h1>
                            <p className="mt-4 text-lg text-gray-600">{post.description}</p>
                            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                                    <span>{post.author}</span>
                                    <span aria-hidden="true">·</span>
                                    <span>{formatDate(post.date)}</span>
                                    <span aria-hidden="true">·</span>
                                    <span>{post.readingTime}</span>
                                </div>
                                <CopyPostLink url={postUrl} />
                            </div>
                        </div>
                    </header>

                    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
                        <div className="nano-dark-bg relative aspect-[16/9] overflow-hidden rounded-lg border border-gray-200">
                            <Image
                                src={post.coverImage}
                                alt={post.coverAlt}
                                fill
                                priority
                                className="object-cover"
                                sizes="(min-width: 1024px) 960px, 100vw"
                            />
                        </div>
                    </div>

                    <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
                        <div className="mb-8 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded bg-blue-50 px-2 py-1 text-xs font-medium text-nanoLinkBlue"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="space-y-6 text-base leading-7 text-gray-700 [&_code]:rounded [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-sm [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gray-950 [&_li]:ml-6 [&_li]:list-disc [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-gray-900 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:leading-6 [&_pre]:text-gray-100 [&_pre_code]:bg-transparent [&_pre_code]:p-0">
                            {post.content}
                        </div>
                    </div>
                </article>
            </main>
            <Footer border />
        </>
    );
}
