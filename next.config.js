module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    return config;
  },
  publicRuntimeConfig: {
    radiks: {
      apiServer: process.env.RADIKS_API_URL || 'http://localhost:3000',
    },
  },
};
