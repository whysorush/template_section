/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.growthally.org' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  }
};
export default nextConfig;
