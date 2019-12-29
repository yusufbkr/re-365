require('dotenv').config();

const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

const nextConfiguration = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    DB_NAME: process.env.DB_NAME
  },
  cssLoaderOptions: {
    importLoaders: 1
  },
  webpack: (config, { defaultLoaders }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web'
    };
    config.resolve.extensions.push('.web.js', '.web.ts', '.web.tsx');
    return config;
  }
};

module.exports = withPlugins([withCss, withSass], nextConfiguration);
