/**
 * Copyright (c) Ang Lee 2020 (http://anglee.info/)
 **/

const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#ff2f92' },
            javascriptEnabled: true,
          },
        },
        postcssLoaderOptions: {
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      },
    },
  ],
};
