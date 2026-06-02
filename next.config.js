/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/stock-data",
        destination: "https://www.nesco.in/nesco_stock/nesco.php",
      },
      {
        source: "/api/chart-data",
        destination: "https://www.nesco.in/nesco_stock/nesco.php",
      },
      {
        source: "/api/historical-quote",
        destination: "https://www.nesco.in/nesco_stock/nesco.php",
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nesco.in",
      },
      {
        protocol: "https",
        hostname: "nescodoucmentsandpdfs.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "nescodocuments.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "nescodocuments.s3.amazonaws.com",
      }
    ],
  },
};

module.exports = nextConfig;
