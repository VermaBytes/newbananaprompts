/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/prompt",
        destination: "/blogs",
        permanent: true
      },
      {
        source: "/prompt/:slug",
        destination: "/post/:slug",
        permanent: true
      },
      {
        source: "/post/how-create-viral-ai-reel-videos-luma-runway",
        destination: "/post/how-to-create-viral-ai-reel-videos-luma-runway",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
