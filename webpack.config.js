const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = require('./webpack.dev');
const proConfig = require('./webpack.pro');

module.exports = mode => {
  switch(mode) {
    case 'development':
      return merge(commonConfig, devConfig, {mode})

    case 'product':
      return merge(commonConfig, devConfig, {mode})
  }
  //return merge(commonConfig, devConfig, {mode})
}

