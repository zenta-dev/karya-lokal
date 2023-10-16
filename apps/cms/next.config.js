/** @type {import('next').NextConfig} */
const { PrismaPlugin } = require("@prisma/nextjs-monorepo-workaround-plugin");

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }
  },
};

module.exports = nextConfig;
