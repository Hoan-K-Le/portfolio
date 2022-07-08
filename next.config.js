/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // not https://
    // an array of whitelisted domains
    domains:['placekitten.com']
  }
}

module.exports = nextConfig
