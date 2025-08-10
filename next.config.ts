import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/firebase-portfolio' : '';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  basePath: basePath,
  assetPrefix: basePath,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  serverExternalPackages: ['@genkit-ai/googleai', 'async_hooks'],
};

export default nextConfig;
