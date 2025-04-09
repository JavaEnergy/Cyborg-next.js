/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cyborg-it.de'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cyborg-it.de',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
  webpack(config) {
    // Allow importing images with "@/assets" prefix
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/assets': new URL('./src/public/assets', import.meta.url).pathname,
    };
    return config;
  },
};

export default nextConfig;
