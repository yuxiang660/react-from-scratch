# 项目简介
通过此项目可以了解React APP的底层构建流程，参考[教程](https://itnext.io/fast-and-modern-front-end-setup-with-webpack-react-redux-router-saga-and-postcss-1360e9715d17)。

# 工作流程
* 安装webpack
> `npm i -D webpack`
* 配置webpack，指定入口`./src/index.js`和出口`public`
> `webpack.config.js`
* webpack已经打包`index.js`输出
> `npm run start`
* 输出网页，将`index.js`插入
    - 安装html-webpack-plugin
    > `npm i -D html-webpack-plugin`
    - `webpack.config.js`配置plugin
    > `new HtmlWebpackPlugin(...)`
* webpack打包`index.html`和`index.js`输出
* 监控开发环境
    - 安装`webpack-dev-server`
    > `npm i -D webpack-dev-server`
    - `webpack.config.js`配置端口和自启动网页
    > `devServer: {...}`
* 静态资源服务
    - 安装`file-loader`
    > npm i -D file-loader
    - `webpack.config.js`配置静态文件类型
    > module: { rules: [test:..., use:...] }
* 清除配置
    - 安装`clean-webpack-plugin`
    > npm i -D clean-webpack-plugin
    - 配置
    > plugin new CleanWebpackPlugin(...)
* 配置CSS资源
    - 安装`css-loader`，导入ccs文件
    > `npm i -D css-loader`
    - 安装`style-loader`，解析css文件
    > `npm i -D style-loader`
    - 配置
    > module: { rules: [test:..., use:...] }
* 将CSS资源单独放置到一个文件中，而不是嵌入到`index.js`
    - 安装`mini-css-extract-plugin`
    > npm install --save-dev mini-css-extract-plugin
    - 配置
    >  plugins: [...], module: { rules: [] }
* 支持`scss`文件
    - 安装`sass-loader`和`node-sass`，实现scss到css的转换
    > npm i -D sass-loader node-sass
    - 配置`sass`，要放到最后，会先执行`sass-loader`
    > use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    - 修改`main.css`到为`main.scss`，并加入`scss`语法，参考[scss与css的区别](https://sass-lang.com/guide)。
    - `npm run build`后，发现输出的不是`main.scss`，而是转换后的`main.css`
* 支持react语法，参考[教程](https://www.valentinog.com/blog/babel/)
    - 安装`babel`
    > npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
    - 新建`.babelrc`配置babel
    > { "presets": ["@babel/preset-env", "@babel/preset-react"] }
    - `webpack.config.js`配置babel
    > rules:[{test:..., use:{loader: "babel-loader"}}]
    - 安装React
    > npm i react react-dom
    - 修改index.js，加入react语法
* 支持`material-ui`
    - 安装`material-ui`
    > npm i -S material-ui
    - 导入`material-ui`
    > <MuiThemeProvider> <App /> </MuiThemeProvider>
    - 使用`material-ui`组件
    > const App = props => <div> <RaisedButton label="CLICK ME" /> </div>

# 问题汇总
## CleanWebpackPlugin
* import方式更新了
    - 需要加`{}`import
* option也更新了
    - [传入参数](https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional)
## extract-text-webpack-plugin配置
* 错误
> DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
* 解决
用`mini-css-extract-plugin`替换`extract-text-webpack-plugin`, [教程](https://github.com/webpack-contrib/mini-css-extract-plugin)
