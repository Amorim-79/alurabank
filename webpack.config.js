const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app', 'js', 'app.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app', 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }
        ]
    }
}