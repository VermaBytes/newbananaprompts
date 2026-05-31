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
      }
    ];
  }
};

export default nextConfig;
