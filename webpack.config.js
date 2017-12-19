var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var isProd = process.env.NODE_ENV === 'production'
var cssDev = ['style-loader', 'css-loader', 'sass-loader']
var cssProd = ExtractTextPlugin.extract({
    use: (['css-loader', 'sass-loader']),
    fallback: 'style-loader',
    publicPath: '/dist'
})
var cssConfig = isProd ? cssProd : cssDev

module.exports = {
    entry: {
        'vendor': './src/vendor.js',
        'home': './src/home.js',
        'story': './src/story.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name].bundle.js'
    },
    module: {
        rules: [{
                test: /\.js?/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.s?css$/,
                use: cssConfig
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?name=images/[name].[ext]',
                    'image-webpack-loader'
                ]
            },
            {
                test: /\.json?/,
                use: [
                    'file-loader?name=data/[name].[ext]',
                ]
            }
        ]
    },
    resolve: {
        alias: {
            libcss: path.resolve(__dirname, './src/lib/css'),
            libjs: path.resolve(__dirname, './src/lib/js')
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        stats: 'errors-only',
        open: true
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles/[name].bundle.css',
            disable: !isProd,
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            title: 'spacex',
            // minify: {
            //     collapseWhitespace: true
            // },
            // hash: true,
            filename: 'index.html',
            excludeChunks: ['story'], 
            template: './src/templates/index.ejs'
        }),
        new HtmlWebpackPlugin({
            title: 'page1',
            // minify: {
            //     collapseWhitespace: true
            // },
            // hash: true,
            filename: 'page1.html',
            excludeChunks: ['home'], 
            template: './src/templates/page1.ejs'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common' 
        // })
    ]
}