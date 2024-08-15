const path = require("path");

module.exports = function override(config, env) {
  config.module.rules.unshift({
    test: /\.js$/,
    enforce: "pre",
    use: ["source-map-loader"],
    exclude: [path.resolve(__dirname, "node_modules/lucide-react")],
  });

  return config;
};
