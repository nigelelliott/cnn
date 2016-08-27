const path = require('path');

module.exports = {
    entry: './main/client.js',
    output: {
        path: './main/static/js',
        filename: 'client.bundle.js',
    },
    resolve: {
        root: '.',
        extensions: ['', '.js']
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    }
};