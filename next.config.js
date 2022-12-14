/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodburl: process.env.MONGODB_URI,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fdn2.gsmarena.com",
        pathname: "/vv/**",
      },
    ],
  },
};

module.exports = nextConfig;
