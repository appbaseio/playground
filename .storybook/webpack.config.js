module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(ttf|eot|png|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				use : "file-loader"
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
				  loader: 'babel-loader',
				  options: {
					presets: ["@babel/preset-env", "@babel/preset-react"],
				  }
				}
			  }
		]
	},
	externals: ["ws"]
}
