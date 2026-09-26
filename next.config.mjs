/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for Cloudflare Pages: the whole site prerenders to ./out.
  // Images are pre-compressed on ingest, so unoptimized serving is fine.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
