const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const fs = require('fs');


const config = {
  entry: {
    
  },
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'index',
        template: path.resolve(__dirname, 'template.html'),
        filename: 'index.html',
        chunks: ['index']
    }),
    new HtmlWebpackPlugin({
        title: 'second',
        template: path.resolve(__dirname, 'template.html'),
        filename: 'second.html',
        chunks: ['second'],
    }),
    new VueLoaderPlugin(),
  ],
}

const entry = {};
const htmlTemplates = [];
const jsFiles = fs.readdirSync(__dirname + '/src/page');
jsFiles.forEach(item => {
    const pageName = item.substring(0, item.indexOf('.'));
    htmlTemplates.push(new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'template.html'),
        filename: `${pageName}.html`
    }));
    entry[pageName] = `./src/page/${pageName}.js`
});
config.entry = entry;
// config.plugins.concat(htmlTemplates);

module.exports = config