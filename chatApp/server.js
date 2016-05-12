var webpack = require('webpack');
var WebPackServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebPackServer(webpack(config),{
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(8080, 'localhost');