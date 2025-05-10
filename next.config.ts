import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async rewrites () {
    return [
      {
        source: '/about',
        destination: '/'
      }
    ]
  },
};

export default nextConfig;
