var path = require('path');
var clean = require('clean-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: {//配置入口
        bundle: __dirname + '/app/main.js',
        vendor:['react','react-dom']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        publicPath: path.resolve(__dirname+'./dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?presets[]=es2015&presets[]=react']
            }
        ]
    },
    plugins:[
        new clean(['dist']),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            minChunks: Infinity
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap:true
        })
    ],
    resolve:{
        extensions:['.js','.jsx']
    },
    devtool: 'cheap-source-map'
}