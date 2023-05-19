const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dev-tools/",
    filename: '[name].js', // Use [name].js as the filename
  },
  mode: 'production',
  performance: {
    hints: 'error',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 244 * 1024, // 244 KiB
    maxEntrypointSize: 244 * 1024, // 244 KiB
  },
};
