var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var contextPath = path.resolve(__dirname, '..');

module.exports = {
    context: contextPath,
    entry: {
        'lmui': './src/main.js'
    },
    output: {
        path: getResolvedPath('dist'),
        libraryTarget: 'umd',
        library: ['LMUI'],
        filename: '[name].js'
    },
    resolveLoader: {
        modules: [ 'node_modules']
    },
    resolve: {
        modules: [getResolvedPath('node_modules')],
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                hotReload: false
            }
        }, {
            test: /\.js$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: ['raw-loader', 'sass-loader?outputStyle=compressed&sourceMap=false']
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('./css/[name].css')
    ],
    devtool: 'sourcemap'
};


function getResolvedPath(filePath) {
    return path.resolve(contextPath, filePath);
}