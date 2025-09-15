/** @type {import('next').NextConfig} */

import { webpackFallback } from '@txnlab/use-wallet'

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        ...webpackFallback
      }
    }
    return config
  }
}

export default nextConfig