const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HandlebarsPlugin = require("handlebars-webpack-plugin");


module.exports = {
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js',
        path: path.resolve(process.cwd(), ' dist'),

    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: (url, resourcePath, context) => {
                        // `resourcePath` is original absolute path to asset
                        // `context` is directory where stored asset (`rootContext`) or `context` option

                        // To get relative path you can use
                        // const relativePath = path.relative(context, resourcePath);

                        if (/my-custom-image\.png/.test(resourcePath)) {
                            return `/images/other_output_path/${url}`;
                        }

                        if (/images/.test(context)) {
                            return `image_output_path/${url}`;
                        }

                        return `images/${url}`;
                    },
                },
            },
            {
                test: /\.s[ac]ss$/,

                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.hbs$/, loader: "handlebars-loader"
            }


        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', 'images/**/*'],

        }),

        new HtmlWebpackPlugin({
            title: "Generic Head Title",
            description: "description for meta tag",
            // the template you want to use
            template: path.join(__dirname, "src", "index.hbs"),
            // the output file name
            filename: path.join(path.resolve(process.cwd(), ' dist'), "indx.html"),
            inject: "index"
        }),

        new HandlebarsPlugin({
            htmlWebpackPlugin: {
                enabled: true, // register all partials from html-webpack-plugin, defaults to `false`
                prefix: "html" // where to look for htmlWebpackPlugin output. default is "html"
            },

            entry: path.join(process.cwd(), "src",  "*.hbs"),
            output: path.join(process.cwd(), "", "[name].html"),

            partials: [
                path.join(process.cwd(), "html",/* <-- this should match htmlWebpackPlugin.prefix */ "*", "*.hbs"),
                path.join(process.cwd(), "src", "hbs", "*", "*.hbs")
            ]
        })


    ],

}