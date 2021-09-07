const nodeExternals = require('webpack-node-externals');

module.exports = {
  reactStrictMode: true,
  externals: [nodeExternals()],
}
