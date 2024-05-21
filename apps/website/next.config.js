//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const path = require('path');
require('dotenv').config();
/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  env: {
    OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  },
  // webpack: (config, { isServer }) => {
  //   // Dodaj alias dla @org/common-ui
  //   config.resolve.alias['@org/common-ui'] = path.resolve(__dirname, '../common-ui/src/');
    
  //   // Dodaj inne niestandardowe konfiguracje Webpacka tutaj, jeśli są potrzebne

  //   return config;
  // },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
