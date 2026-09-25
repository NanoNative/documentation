/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/documentation",
    images: {
        unoptimized: true,
    },
    output: "export",
    reactStrictMode: true,
    trailingSlash: true,
};

module.exports = nextConfig;
