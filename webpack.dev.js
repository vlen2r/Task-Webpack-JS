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
}