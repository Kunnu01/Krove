/** @type {import('next').NextConfig} */

import { config } from 'dotenv'
config({ path: '.env' })

const nextConfig = {
  experimental: {
    fallbackNodePolyfills: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL_INTERNAL: process.env.NEXTAUTH_URL_INTERNAL,
  },
  reactStrictMode: true,
};

export default nextConfig;
