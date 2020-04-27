const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/assets/js/orbit.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9001
  },
  plugins: [
    new CopyPlugin([
      { 
        from: './src/*.html',
        flatten: true  
      },
      {
        from: 'src/assets/',
        to: 'assets',
        toType: 'dir'
      }
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-transform-destructuring',
                '@babel/plugin-proposal-class-properties'
              ]
            }
          }
        ]
      }
    ]
  }
};