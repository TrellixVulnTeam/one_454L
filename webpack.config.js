const path = require("path");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "onepage/static/js/index.js"),
        maps: path.resolve(__dirname, "onepage/static/js/maps.js"),
        binary: path.resolve(__dirname, "onepage/static/js/binary.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
    }
};
