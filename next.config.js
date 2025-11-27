/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    serverSourceMaps: false,  // ← ВОТ ЭТО ГЛАВНОЕ
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ac.goit.global",
        pathname: "/car-rental-task/**",
      },
    ],
  },
};
