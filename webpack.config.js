//#76. Webpack

const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/script.js",
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "bundle.js",
    },
    watch: true,
    devtool: "source-map",
};
