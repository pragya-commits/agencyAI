import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["agency4ai.in"], // ✅ allow images from this domain
  },
};

export default nextConfig;
