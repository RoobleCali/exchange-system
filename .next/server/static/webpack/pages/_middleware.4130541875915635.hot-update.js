"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_middleware",{

/***/ "(middleware)/./pages/_middleware.js":
/*!******************************!*\
  !*** ./pages/_middleware.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_middlware\": () => (/* binding */ _middlware)\n/* harmony export */ });\n// authorization middleware for all routes based on user role\nconst _middlware = (req, res, next)=>{\n    const token = req.cookies;\n    // check if use has a token in the cookies and send api call\n    if (!token) {\n        return res.redirect(\"/login\");\n    }\n    next();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vcGFnZXMvX21pZGRsZXdhcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZEQUE2RDtBQUV0RCxNQUFNQSxVQUFVLEdBQUcsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLElBQUksR0FBSztJQUM1QyxNQUFNQyxLQUFLLEdBQUdILEdBQUcsQ0FBQ0ksT0FBTztJQUN6Qiw0REFBNEQ7SUFDNUQsSUFBSSxDQUFDRCxLQUFLLEVBQUU7UUFDVixPQUFPRixHQUFHLENBQUNJLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUMvQjtJQUNESCxJQUFJLEVBQUUsQ0FBQztDQUNSLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX21pZGRsZXdhcmUuanM/NTMzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhdXRob3JpemF0aW9uIG1pZGRsZXdhcmUgZm9yIGFsbCByb3V0ZXMgYmFzZWQgb24gdXNlciByb2xlXG5cbmV4cG9ydCBjb25zdCBfbWlkZGx3YXJlID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IHRva2VuID0gcmVxLmNvb2tpZXM7XG4gIC8vIGNoZWNrIGlmIHVzZSBoYXMgYSB0b2tlbiBpbiB0aGUgY29va2llcyBhbmQgc2VuZCBhcGkgY2FsbFxuICBpZiAoIXRva2VuKSB7XG4gICAgcmV0dXJuIHJlcy5yZWRpcmVjdChcIi9sb2dpblwiKTtcbiAgfVxuICBuZXh0KCk7XG59O1xuIl0sIm5hbWVzIjpbIl9taWRkbHdhcmUiLCJyZXEiLCJyZXMiLCJuZXh0IiwidG9rZW4iLCJjb29raWVzIiwicmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./pages/_middleware.js\n");

/***/ })

});