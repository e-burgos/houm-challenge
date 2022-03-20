/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  output: {
      publicPath: 'auto',
  },
  images: {
      deviceSizes: [320, 420, 768, 1024, 1200],
      loader: 'default',
      domains: ['res.cloudinary.com'],
  },
  module: {
      rules: [
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
          },
          {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
          },
      ],
  },
};