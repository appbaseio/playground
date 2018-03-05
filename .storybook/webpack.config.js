module.exports = {
	module: {
		rules: [
			{
				test: /\.md$/,
				loader: "raw-loader"
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(ttf|eot|png|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				use : "file-loader"
			}
		]
	},
	externals: ["ws"]
}
