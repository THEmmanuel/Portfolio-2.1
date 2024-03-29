const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
	mode: 'development',

    module: {
        rules: [{
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },

            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.(png|jpg|svg)$/,
                use: ["file-loader"],
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
}