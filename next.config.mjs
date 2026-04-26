/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
  async redirects() {
    return [
      { source: '/about', destination: '/',         permanent: true },
      { source: '/now',   destination: '/projects', permanent: true },
    ];
  },
};

export default nextConfig;