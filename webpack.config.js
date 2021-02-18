const path = require('path');

module.exports = {
    mode: 'production',
    entry: [
        __dirname + '/src/js/app.js',
        __dirname + '/src/scss/app.sass',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.min.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [],
            },
            {
                test: /\.sass$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'css/', name: '[name].min.css'}
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
};