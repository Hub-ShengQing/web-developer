// 3. 配置 html-webpack-plugin

// 3.1 导入 HTML 插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin');

// 3.2 创建 HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',   // 指定需要复制的页面
    filename: './index.html'    // 指定粘贴的文件名和地址
});

// 4. 配置 clean-webpack-plugin 插件
// {} 是结构赋值
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require("path");

// 1. 默认约定的打包入口与出口
// // 使用 Node.js 中的导出语法，向外导出一个 webpack 的配置对象
module.exports = {
    // 代表 webpack 运行的模式，
    // 可选值：development（未压缩版）、production(压缩版)
    mode: 'development',
    // 在开发调试阶段，建议 devtool: 'eval-source-map'
    devtool: 'eval-source-map',
    // 建议关闭 Source Map 或将 devtool 的值设置为 nosources-source-map
    // devtool: 'nosources-source-map',
    // output 指定打包出口
    output: {
        path: path.join(__dirname, "dist"),
        filename: "js/main.js"
    },
    // 通过 plugins 节点，使 HTML 插件生效
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    // 4. 通过 devServer 节点配置 html-webpack-plugin
    devServer: {
        open: true,
        port: 8080,
        // 指定运行的主机地址
        host: '127.0.0.1'
    },
    // webpack 处理不了，查找相应的 loader
    module: {
        rules: [
            // 定义了不同模块对应的 loader
            // use 内的 loader 顺序是反向的
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // limit 图片大小，outputPath 输出路径
            { test: /\.jpg|png|gifs$/, use: 'url-loader?limit=12229&outputPath=imgs' },
            // 使用 babel-loader 处理高级的 JS 语法
            // 排除 node_modules 目录中的 JS 文件
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
            // loader 处理完之后交给 webpack
            // webpack 将其合并打包到出口文件中
        ]
    },
    resolve: {
        // 设置 @ 为 src 这层目录
        alias: {
            '@': path.join(__dirname, './src/')
        }
    }
}

/* // 2. 自定义的打包入口与出口
const path = require("path");

module.exports = {
    mode: 'development',
    // entry 指定打包入口
    entry: path.join(__dirname, "./src/index_copy.js"),
    // output 指定打包出口
    output: {
        path: path.join(__dirname, "dist"),
        filename: "newMain.js"
    }
} */


