/**
 * Created by Sairam.Manda on 12/10/2016.
 */
module.exports = {
    entry:[
        'webpack-dev-server/client?http://localhost:5000',
        './index.tsx'
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['', '.js', '.jsx','.ts','.tsx','.css']
    },
    module: {
        loaders: [
            { test: /\.css$/, exclude: /node_modules/,loader: "style!css" },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
};