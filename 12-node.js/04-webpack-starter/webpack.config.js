// the only files to use the common js syntax
const path = require('path') 
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { compileFunction } = require('vm')
module.exports = {
    mode: 'development',  // dev 
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),// output's folder is dist
        filename: 'bundle.js'
    },
    // config the webpack-dev-server
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        hot: true,
        open: true,
        compress: true,
        historyApiFallback: true
    },
    // to config the things like the css loader
    module: {
        rules: [
            {
                // match all the css file
                test: /\.css$/ , 
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // config the like the html plugin
    plugins: [
        new HtmlWebPackPlugin({
           title: 'Webpack App',
           filename: 'index.html', 
           // create a template to generate the index.html
           template: './src/index.html'
        })
    ],
}