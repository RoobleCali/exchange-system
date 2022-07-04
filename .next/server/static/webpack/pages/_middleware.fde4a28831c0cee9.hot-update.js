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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function middleware(req) {\n    // get the requested url\n    const url = req.nextUrl.clone();\n    console.log(url.pathname);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.rewrite(url);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vcGFnZXMvX21pZGRsZXdhcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBRXBDLGVBQWVDLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFO0lBQ3BDLHdCQUF3QjtJQUN4QixNQUFNQyxHQUFHLEdBQUdELEdBQUcsQ0FBQ0UsT0FBTyxDQUFDQyxLQUFLLEVBQUU7SUFFL0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixHQUFHLENBQUNLLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLE9BQU9SLDZEQUFvQixDQUFDRyxHQUFHLENBQUMsQ0FBQztDQUNsQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fbWlkZGxld2FyZS5qcz81MzNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEpIHtcbiAgLy8gZ2V0IHRoZSByZXF1ZXN0ZWQgdXJsXG4gIGNvbnN0IHVybCA9IHJlcS5uZXh0VXJsLmNsb25lKCk7XG5cbiAgY29uc29sZS5sb2codXJsLnBhdGhuYW1lKTtcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5yZXdyaXRlKHVybCk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcSIsInVybCIsIm5leHRVcmwiLCJjbG9uZSIsImNvbnNvbGUiLCJsb2ciLCJwYXRobmFtZSIsInJld3JpdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./pages/_middleware.js\n");

/***/ })

});