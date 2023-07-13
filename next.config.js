/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "external-preview.redd.it",
      },
    ],
  },
};

module.exports = nextConfig;
