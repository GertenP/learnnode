import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Webpack konfiguratsioon koos API andmete lisamisega
export default async () => {
  // Fetch API andmed
  let character;
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character/16');
    character = await response.json();
  } catch (error) {
    console.error('API fetch error:', error);
    character = {
      name: 'Unknown',
      image: 'https://via.placeholder.com/300x300',
      status: 'Unknown',
      gender: 'Unknown',
      species: 'Unknown',
      origin: { name: 'Unknown' },
      location: { name: 'Unknown' },
      episode: [],
    };
  }

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
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/i,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  quietDeps: true,
                },
              },
            },
          ],
        },
        {
          test: /\.njk$/,
          use: [
            {
              loader: 'simple-nunjucks-loader',
              options: {},
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.njk',
        templateParameters: {
          character, // Andmed API-st
        },
      }),
    ],
  };
};
