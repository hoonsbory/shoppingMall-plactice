/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
