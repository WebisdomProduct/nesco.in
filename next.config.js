/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
};

module.exports = nextConfig;
