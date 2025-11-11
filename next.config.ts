import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        search: "",
      },
      {
        protocol: "https",
        hostname: "lookbook-lhartfiel.pythonanywhere.com",
        pathname: "/media/**",
      },
    ],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
