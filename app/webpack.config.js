import path from 'path'
import merge from 'merge'

module.exports = {
    entry:'./client/index.js',
    output:{
        path:'dist',
        publicPath:'/',
        filename:'bundle.js'
    },
    resolve:{
        extensions:['','.js','.jsx']
    },
    module:{
        loaders:[
            {
                test:/\.jsx$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['react','es2015','stage-2'],
                    plugins:['transform-class-properties']
                }
            }
        ]
    }
};