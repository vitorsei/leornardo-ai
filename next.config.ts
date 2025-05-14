import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    remotePatterns: [new URL('https://rickandmortyapi.com/api/character/avatar/*.jpeg')],
  },
};

export default nextConfig;
