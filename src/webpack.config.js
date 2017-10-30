const webpack=require('webpack');
const ExtractTextPlugin=require('extract-text-webpack-plugin');  //提取公共
const ComonChunkPlugin=webpack.optimize.ComonChunkPlugin;
const HtmlWebpackPlugin=require('html-webpack-plugin');
const path=require('path');

module.exports={
   entry: ['babel-polyfill',__dirname+'/index.js'], //帮助有些es6 es7无法兼容编译问题 如set map promise
   output:{
        path:path.join(__dirname,'../www'),
        publicPath: path.join(__dirname, "../www"),
        filename:'app[hash].js'
    },
    module:{
           rules:[{
               test:/\.js$/,
               exclude:/node_modules/,  //排除文件夹
               loader:'babel-loader',
               query:{
                    presets:['es2015'],
                    plugins:['transform-runtime'] //一些帮助函数 可能重复出现在一些模块里，导致编译后的体积变大。这个就是解决这个问题
               }
           },{
               test: /\.css$/,
                use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
               
                 }),
           },{
                 test:/\.png$/,
                 use:{
                     loader:'url-loader',
                     options:{limit:8192}
                 }
           },{
                test: /\.(jpg|gif)$/,
                 use: [ 'file-loader']
           }]
     },
     plugins:[
         new ExtractTextPlugin('./asset/[name].css'),
         new HtmlWebpackPlugin({
             title:'首页',
             template:'./index.html',
             inject:'head', //true或者body：所有JavaScript资源插入到body元素的底部   head: 所有JavaScript资源插入到head元素中  false： 所有静态资源css和JavaScript都不会注入到模板文件中
              showErrors: true, //是否将错误信息输入到html页面中
              minify:false, //是否将html页面压缩
             filename:'goodbad.html'
         })
     ]
}