// next.config.mjs

import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

const nextConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    reactStrictMode: true,
    images: {
      domains: ['example.com'], // Replace 'example.com' with your actual image hosting domain
    },
    basePath: '/luxury-fashiontv-cosmetics',
    poweredByHeader: false,
    i18n: {
      locales: ['en'],
      defaultLocale: 'en'
},
    sassOptions: {
      prependData: 
        $primary-color: pink;
        $secondary-color: white;
        $font-family-luxury: 'Playfair Display', serif;
      
},
    webpack(config) {
      if (!isDev) {
        config.optimization.splitChunks.cacheGroups = {
          styles: {
            name: 'styles',
            
};
      }
      return config;
    }
};
};

export default nextConfig;