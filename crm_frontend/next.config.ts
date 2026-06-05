import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: "C:\\my project space\\",
  
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://127.0.0.1:8000/api/:path*",
      },
    ];
  },
};

export default nextConfig;