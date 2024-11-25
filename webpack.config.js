import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// AInult asi mis tagastab promise siis saab .then kasutada
// ALATI PANE AWAIT, KUI PROMISE
export default async () => {

  let response = await fetch("https://rickandmortyapi.com/api/character/");
  let result = await response.json();
  let characters = result.results

  return {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(import.meta.dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(import.meta.dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                quietDeps: true
              }
            }
          }],
      },
      {
        test: /\.njk$/,
        use: [
          {
            loader: 'simple-nunjucks-loader',
            options: {}
          }
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.njk',
      templateParameters: {
        name: "Maido",
        characters, //characters: characters,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/about.njk'
    })
  ],
}};