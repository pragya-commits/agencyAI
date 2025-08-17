import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["agency4ai.in", "images.unsplash.com", "randomuser.me"], // ✅ allow all 3 domains
  },
};

export default nextConfig;
