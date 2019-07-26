const fs = require('fs-extra');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
    const isProd        = env === 'prod';
    const styleLoader   = isProd ? MiniCssExtractPlugin.loader : "style-loader"; // create css file or inline styles
    
    if (isProd) fs.emptyDirSync(path.resolve(__dirname, "dist/")); // empty the dist dir

    return {
        entry: "./src/index.js",
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "babel-loader",
                    options: { presets: ["@babel/env"] }
                },
                {
                    test: /\.scss$/,
                    use: [
                        styleLoader,
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS, using Node Sass by default
                    ]
                },
                {
                    test: /\.css$/,
                    use: [styleLoader, "css-loader"]
                },
                {
                    test: /\.(png|jpg|gif|woff(2)?|ttf|eot|svg)$/,
                    use: "file-loader"
                }
            ]
        },
        resolve: { extensions: ["*", ".js", ".jsx"] },
    };
};