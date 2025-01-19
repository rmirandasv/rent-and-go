import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/*",
      },
      {
        protocol: "https",
        hostname: "backend.rentandgo.autos",
        pathname: "/uploads/*",
      }
    ],
  },
};

export default nextConfig;
