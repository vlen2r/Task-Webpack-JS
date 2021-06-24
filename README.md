# Task-Webpack-JS
 Proyecto realizado en base al curso de Udemy "Javascript Moderno" - Seccion 8 y Seccion 10

# ¿Como se fue creando el proyecto?
 Paso por paso.

    //////////////////////////////////////////////////////////////////////
    *1- npm init //-> Ejecutar comando
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *2- npm install webpack webpack-cli --save-dev //-> Ejecutar comando
      https://webpack.js.org/guides/getting-started/
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *3- npm install --save-dev html-loader //-> Ejecutar comando
      https://webpack.js.org/loaders/html-loader/
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *4- Crear un nuevo archivo llamado "./webpack.dev.js" y pegar el siguiente codigo:

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
        }
    }
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *5- Añadir la siguiente linea a el archivo "./package.json"

    "scripts": {
        "build:dev": "webpack --config webpack.dev.js" //-> Linea agregada, esto nos permite el npm run build:dev
    },
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *6- npm install --save-dev html-webpack-plugin //-> Ejecutar comando
      https://webpack.js.org/plugins/html-webpack-plugin/
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *7- Copiar y pegar la siguiente linea en el archivo "./webpack.dev.js"

    const HtmlWebPackPlugin = require('html-webpack-plugin');

    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ]
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *8- npm i -D webpack-dev-server //-> Ejecutar comando
      https://webpack.js.org/configuration/dev-server/
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *9- Agregar la siguiente linea al "./package.json"
    
    "scripts": {
        "start": "webpack serve --config webpack.dev.js --open --port=8080" //-> Linea agregada
    },    
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *10- npm install --save-dev style-loader //-> Ejecutar comando
      https://webpack.js.org/loaders/style-loader/
    //////////////////////////////////////////////////////////////////////
    
    //////////////////////////////////////////////////////////////////////
    *11- npm install --save-dev css-loader //-> Ejecutar comando
      https://webpack.js.org/loaders/css-loader/
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////    
    *12- Agregar la siguiente regla en rules de "./webpack.dev.js"
    
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    //////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////
    *13- npm install --save-dev mini-css-extract-plugin //-> Ejecutar comando
      https://webpack.js.org/plugins/mini-css-extract-plugin/
    //////////////////////////////////////////////////////////////////////

    *14- Agregar las siguientes lineas en "./webpack.dev.js"
    
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    module: {
        rules: [ //-> Añadir esta nueva regla
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },
    plugins: [ //-> Añadir este nuevo plugin
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css',
            ignoreOrder: false,
        }),
    ]
    
    //////////////////////////////////////////////////////////////////////
    *7- npm install copy-webpack-plugin --save-dev //-> Ejecutar comando
      https://webpack.js.org/plugins/copy-webpack-plugin/
    //////////////////////////////////////////////////////////////////////
    
    //////////////////////////////////////////////////////////////////////
    *8- npm install css-minimizer-webpack-plugin --save-dev //-> Ejecutar comando
      https://webpack.js.org/plugins/css-minimizer-webpack-plugin/#root
    //////////////////////////////////////////////////////////////////////
    
    //////////////////////////////////////////////////////////////////////
    *9- npm install terser-webpack-plugin --save-dev //-> Ejecutar comando
      https://webpack.js.org/plugins/terser-webpack-plugin/#root
    //////////////////////////////////////////////////////////////////////
    
    //////////////////////////////////////////////////////////////////////
    *10- Seguir los pasos de la siguiente pagina (elegir opcion webpack)
      https://babeljs.io/setup
    //////////////////////////////////////////////////////////////////////
    
    *11-

