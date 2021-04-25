const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const cssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const htmlMinimizerPlugin = require('html-minimizer-webpack-plugin');

const plugins = [
    new miniCssExtractPlugin({
        filename: 'styles.css',
    }),
];

module.exports = {
    entry: path.resolve(__dirname, 'app', 'js', 'app.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app', 'dist'),
        publicPath: 'dist',
    },
    mode: process.env.NODE_ENV || 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.css$/,
                use: [miniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff',
                },
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/octet-stream',
                },
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'image/svg+xml',
                },
            },
        ],
    },
    optimization: {
        minimizer: [
            `...`,
            new htmlMinimizerPlugin(),
            new cssMinimizerPlugin(),
        ],
    },
    plugins,
    devServer: {
        contentBase: './app',
        compress: false,
        port: 8080,
    },
};
