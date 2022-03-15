const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    	publicPath: '/'
    },
    devServer: {
        open: true,
        host: 'localhost',
	historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({template: "src/index.html"}),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
