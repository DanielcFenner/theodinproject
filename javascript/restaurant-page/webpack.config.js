const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',

    devServer: {

        static: './dist',

    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};