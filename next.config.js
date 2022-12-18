/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
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
