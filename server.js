/* eslint-disable no-var, strict */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
    proxy: {
        "/api/**": {
            target: "http://localhost:9000",
            pathRewrite: {
                "^/api": ""
            }
        },
        "/tv/**": {
            target: "http://localhost:9000/tv/",
            pathRewrite: {
                "^/tv": ""
            }
        }
    }
}).listen(5000, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:5000');
  });
