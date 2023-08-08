module.exports = {
    mode: "development",
    entry: "./src/js/script.js",
    output: {
        path: __dirname + "dist/bundle.js",
        filename: "./dist/bundle.js",
    },
    watch: true,
    devtool: "source-map",
    module: {},
};
