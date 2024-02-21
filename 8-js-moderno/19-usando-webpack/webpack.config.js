const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/, //esta expressão testa todos os arquivos que são css. "\" ignora o '.' e '$' indica o que se quer encontrar;
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
