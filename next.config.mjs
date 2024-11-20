/**
 * @type {import('next').NextConfig}
 */
import { withSentryConfig } from '@sentry/nextjs';

const isDev = process.env.NEXT_PUBLIC_ENVIRONMENT === 'DEV';

const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
  experimental: {
    appDir: true,
    typedRoutes: false,
  },
  images: {
    path: '/',
    loader: 'custom',
    minimumCacheTTL: 60,
    loaderFile: './src/app/image.ts',
    domains: ['unsplash.com', 'picsum.photos'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

export default nextConfig;
