const path = require("path");

module.exports = {
  entry: "./src/server/index.ts",
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    minimize: false,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist-server"),
  },
  watchOptions: {},
};
