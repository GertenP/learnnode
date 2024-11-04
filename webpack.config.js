import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Template } from 'webpack';

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(import.meta.dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: ''}
    )
  ],
};
