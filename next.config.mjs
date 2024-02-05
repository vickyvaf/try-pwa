/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    API_SOURCE: process.env.API_SOURCE,
    APP_BASEURL: process.env.APP_BASEURL,
    WEBSOCKET: process.env.WEBSOCKET,
    PREFIX_WEBSOCKET: process.env.PREFIX_WEBSOCKET,
    CHANNEL_TRACKING: process.env.CHANNEL_TRACKING,
    CHANNEL_ACTIVITY_START: process.env.CHANNEL_ACTIVITY_START,
    ACCESS_TOKEN_MAPBOX: process.env.ACCESS_TOKEN_MAPBOX,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_SOURCE}/:path*`,
      },
    ];
  },
  output: 'standalone',
};

export default nextConfig;
