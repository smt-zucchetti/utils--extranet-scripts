const path = require('path')
const glob = require('glob')
const webpack = require('webpack');

const fileArr = glob.sync('./src/clients/*/{{pages/*.js,service-providers/*[0-9].js,script.js,first.js,last.js,service-provider.js},all-pages.js}', {}).reduce((acc,cur) =>
{
    const entry = cur.substring(6).slice(0,-3)
    acc[entry] = cur
    return acc
},{})

module.exports = 
{
    entry: fileArr,
    
    output: 
    {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'cms',
        clean: true
    },
    
    plugins:
    [
        new webpack.ProvidePlugin( 
        {
            utilsAuto: path.resolve(path.join(__dirname, 'src/lib/utils'))
        })
    ],
    
    module: 
    {
        rules: 
        [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: [{ loader: 'webpack-glob-loader' }]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{loader: 'file-loader'}]
            }
        ]
    },
    
    mode: 'production'
}
