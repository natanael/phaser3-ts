const path = require("path");

module.exports = {
	entry: path.resolve(__dirname, "src/app/index.ts"),
	resolve: {
		extensions: [".ts", ".js", ".json"]
	},
	output: {
		path: path.resolve(__dirname, "build" + "/" + process.env.PLATFORM),
		filename: "app.js"
	},
	module: {
		rules: [
			{
				test: /\.(frag|vert)$/i,
				use: {
					loader: "raw-loader"
				}
			},
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader"
			}
		]
	}
};
