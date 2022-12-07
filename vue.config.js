const { defineConfig } = require("@vue/cli-service");
const { ProvidePlugin } = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        buffer: require.resolve("buffer/"),
      },
    },
    plugins: [
      new ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
  },
});
