const presetEnv = require("postcss-preset-env");

const config = {
  plugins: [
    presetEnv({
      stage: 2,
      features: {
        "nesting-rules": true,
      },
    }),
  ],
};

module.exports = config;
