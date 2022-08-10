/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["static.vecteezy.com","res.cloudinary.com", "s.gravatar.com", "lh3.googleusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
