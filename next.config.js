// const UnoCSS = require('@unocss/webpack').default

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: false },
  reactStrictMode: true,
  // webpack: (config) => {
  //   config.cache = false
  //   config.plugins.push(
  //     UnoCSS(),
  //   )
  //   return config
  // }
};

module.exports = nextConfig;
