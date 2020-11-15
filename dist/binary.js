/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*************************************!*\
  !*** ./onepage/static/js/binary.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("$(document).ready(function() {\n\n    var c = document.getElementById(\"canvas\");\n    var ctx = c.getContext(\"2d\");\n\n    var sectionHeight = window.innerHeight;\n    var sectionWidth = window.innerWidth * 10;\n\n    c.height = sectionHeight;\n    c.width = sectionWidth;\n\n    var values = \"01010101></$=+.#(){}[]|*\";\n\n    values = values.split(\"\");\n\n    var font_size = 12;\n    var columns = c.width / font_size;\n\n    var drops = [];\n\n    for (var x = 0; x < columns; x++)\n        drops[x] = 1;\n\n    function draw() {\n\n        ctx.fillStyle = \"rgba(0, 0, 0, 0.05)\";\n        ctx.fillRect(0, 0, c.width, c.height);\n\n        ctx.fillStyle = \"#8a78ff\";\n        ctx.font = font_size + \"px arial\";\n\n        for (var i = 0; i < drops.length; i++) {\n\n            //a random values character to print\n            var text = values[Math.floor(Math.random() * values.length)];\n            //x = i*font_size, y = value of drops[i]*font_size\n            ctx.fillText(text, i * font_size, drops[i] * font_size);\n\n            //sending the drop back to the top randomly after it has crossed the screen\n            //adding a randomness to the reset to make the drops scattered on the Y axis\n            if (drops[i] * font_size > c.height && Math.random() > 0.975)\n                drops[i] = 0;\n\n            //incrementing Y coordinate\n            drops[i]++;\n        }\n    }\n    setInterval(draw, 85);\n});\n\n//# sourceURL=webpack://onepage/./onepage/static/js/binary.js?");
/******/ })()
;