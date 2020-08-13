const path = require("path");
module.exports = {
  entry: "./client/src/index.js",
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 40000 },
          },
          "image-webpack-loader",
        ],
      },
    ],
  },
};
