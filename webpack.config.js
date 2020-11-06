const path = require("path");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "onepage/static/js/index.js"),
        maps: path.resolve(__dirname, "onepage/static/js/maps.js"),
        binary: path.resolve(__dirname, "onepage/static/js/binary.js"),
        particles: path.resolve(__dirname, "onepage/static/js/particles.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
    }
};
