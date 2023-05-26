/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.29cm.co.kr',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/product',
        basePath: false,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
