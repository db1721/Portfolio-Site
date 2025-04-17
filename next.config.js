/** @type {import('next').NextConfig} */
const nextConfig = {
    // enable React’s Strict Mode
    reactStrictMode: true,

    // enable the SWC styled‑components transform for SSR className stability
    compiler: {
        styledComponents: true,
    },

    // emit a full static export (replaces `next export`)
    output: 'export',
};

module.exports = nextConfig;
