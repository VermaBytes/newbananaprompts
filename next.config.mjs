/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_BUILD_DIR ?? ".next",
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/post/how-create-viral-ai-reel-videos-luma-runway",
        destination: "/post/how-to-create-viral-ai-reel-videos-luma-runway",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
