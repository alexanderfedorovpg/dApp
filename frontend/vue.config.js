const { defineConfig } = require('@vue/cli-service');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

/**
 * Build Config CLI Vue
 */
module.exports = defineConfig({
	transpileDependencies: true,
	configureWebpack: {
		plugins: [new NodePolyfillPlugin()],
	},
});
