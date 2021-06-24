const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        clean: true,
        filename: '[name].[fullhash].js',
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    sources: false,
                }
            }],
        }, ],
    },
    optimization: {

    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ]
}