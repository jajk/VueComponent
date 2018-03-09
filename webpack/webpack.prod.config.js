var webpack = require('webpack');
var baseConfig = require('./base.config');
baseConfig.plugins.push(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: ' "production" '
    }
}), new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
}));

baseConfig.devtool = '';

module.exports = baseConfig;