const {join} = require('path');
const merge = require('webpack-merge');

const CssExtractPlugin = require('mini-css-extract-plugin');
const CssExtractLoader = CssExtractPlugin.loader;

const DotenvPlugin = require('dotenv-webpack');

const common = require('../webpack.config');

const {
    PROJECT_PATH,
} = require('../utils/paths');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    CssExtractLoader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    CssExtractLoader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    CssExtractLoader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new CssExtractPlugin(),
        new DotenvPlugin({
            path: join(PROJECT_PATH, '.env.production'),
        }),
    ],
});
