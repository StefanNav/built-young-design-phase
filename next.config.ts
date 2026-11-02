import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old sessions don't map one-to-one onto the new lessons.
      { source: "/session/:num", destination: "/", permanent: false },
      { source: "/overview", destination: "/", permanent: false },
      { source: "/prompts", destination: "/", permanent: false },
      { source: "/resources", destination: "/", permanent: false },
      { source: "/walkthrough", destination: "/lesson/2", permanent: false },
    ];
  },
};

export default nextConfig;
