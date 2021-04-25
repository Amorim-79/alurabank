const path = require('path');
const webpack = require('webpack');

const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const BASE_URL = process.env.NODE_ENV === 'production' ? JSON.stringify('http://minha-api') : JSON.stringify('http://localhost:3000');

const plugins = [
    new miniCssExtractPlugin({
        filename: 'styles.css',
    }),
    new htmlWebpackPlugin({
        filename: 'index.html',
        hash: true,
        minify: {
            html5: true,
            collapseWhitespace: true,
            removeComments: true,
        },
        template: path.resolve(__dirname, 'app', 'index.html'),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
    }),
    new webpack.DefinePlugin({ BASE_URL }),
];

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'app', 'js', 'app.js'),
        vendor: ['jquery', 'bootstrap'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app', 'dist'),
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
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    filename: 'vendor.bundle.js',
                    test: /[\\/]node_modules[\\/](jquery|bootstrap)[\\/]/,
                    chunks: 'all',
                    enforce: true,
                  }
            },
        },
        minimizer: [
            `...`,
            new cssMinimizerPlugin(),
        ],
    },
    plugins,
};
