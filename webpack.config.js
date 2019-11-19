"use strict";

const path = require('path');

module.exports = {
    mode: 'production',
    entry: './main.ts',
    resolve: {
      extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
      rules: [
        { test: /\.ts$/, loader: 'ts-loader' }
      ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
}
