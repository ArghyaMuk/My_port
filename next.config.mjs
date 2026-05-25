import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['192.168.0.144'],
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
