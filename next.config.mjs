/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nescodocuments.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
