const repoBase = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: repoBase ? `/${repoBase}` : "",
  assetPrefix: repoBase ? `/${repoBase}/` : "",
};

export default nextConfig;
