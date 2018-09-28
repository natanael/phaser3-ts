const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

require("dotenv").config();

if (
	process.env.WEBGL_RENDERER !== "true" &&
	process.env.CANVAS_RENDERER !== "true"
)
	throw new Error(
		"Either WEBGL_RENDERER or CANVAS_RENDERER must be set! Try modifying .env file. Aborting!"
	);

module.exports = merge(common, {
	devtool: "source-map",
	output: {
		publicPath: "/"
	},
	devServer: {
		contentBase: path.join(__dirname, "assets"),
		publicPath: "/",
		hot: true,
		host: "0.0.0.0"
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/app/index.html",
			templateParameters: {
				webglRenderer: process.env.WEBGL_RENDERER === "true",
				canvasRenderer: process.env.CANVAS_RENDERER === "true"
			}
		})
	],
	mode: "development"
});
