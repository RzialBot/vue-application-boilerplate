const {join} = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const VuePlugin = require('vue-loader/lib/plugin');

const {
    SRC_PATH,
    RES_PATH,

    DIST_PATH,
} = require('./utils/paths');

module.exports = {
    entry: join(SRC_PATH, 'main.js'),
    output: {
        path: DIST_PATH,
    },

    resolve: {
        alias: {
            '@src': SRC_PATH,
            '@res': RES_PATH,
        },
    },

    stats: {
        children: false,
        modules: false,
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                oneOf: [
                    {
                        resourceQuery: /^\?vue/,
                        use: ['pug-plain-loader'],
                    },
                    {
                        use: ['pug-loader'],
                    },
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]?[hash]',
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new VuePlugin(),
        new HtmlPlugin({
            template: join(RES_PATH, 'index.pug'),
            inject: false,
        }),
    ],
};
