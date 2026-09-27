import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // OpenNext (@opennextjs/cloudflare) 需要 standalone 产物，不能是 export
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "./"),
  turbopack: {},
  webpack: (config) => {
    return config;
  },
  env: {
    CURRENT_SITE_DOMAIN: process.env.CURRENT_SITE_DOMAIN || "huascaranpark.com",
  },
};

export default nextConfig;
