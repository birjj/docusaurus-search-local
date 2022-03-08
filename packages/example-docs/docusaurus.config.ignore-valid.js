const config = require("./docusaurus.config.js");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  ...config,
  plugins: [
    [config.plugins[0][0], {
      ...config.plugins[0][1],
      ignore: [
        '/',
        '/docs/doc2',
        '/nonexisting'
      ]
    }]
  ]
};
