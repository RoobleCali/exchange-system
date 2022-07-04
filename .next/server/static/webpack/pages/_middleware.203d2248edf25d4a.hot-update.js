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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction middleware(req) {\n    const url = req.nextUrl.clone();\n    url.pathname = \"/login\";\n    const token = req.cookies.token;\n    if (!token) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.rewrite(url);\n    } else {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse[\"continue\"]();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vcGFnZXMvX21pZGRsZXdhcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBRXBDLFNBQVNDLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFO0lBQzlCLE1BQU1DLEdBQUcsR0FBR0QsR0FBRyxDQUFDRSxPQUFPLENBQUNDLEtBQUssRUFBRTtJQUMvQkYsR0FBRyxDQUFDRyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQ3hCLE1BQU1DLEtBQUssR0FBR0wsR0FBRyxDQUFDTSxPQUFPLENBQUNELEtBQUs7SUFDL0IsSUFBSSxDQUFDQSxLQUFLLEVBQUU7UUFDVixPQUFPUCw2REFBb0IsQ0FBQ0csR0FBRyxDQUFDLENBQUM7S0FDbEMsTUFBTTtRQUNMLE9BQU9ILGlFQUFxQixFQUFFLENBQUM7S0FDaEM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fbWlkZGxld2FyZS5qcz81MzNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEpIHtcbiAgY29uc3QgdXJsID0gcmVxLm5leHRVcmwuY2xvbmUoKTtcbiAgdXJsLnBhdGhuYW1lID0gXCIvbG9naW5cIjtcbiAgY29uc3QgdG9rZW4gPSByZXEuY29va2llcy50b2tlbjtcbiAgaWYgKCF0b2tlbikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmV3cml0ZSh1cmwpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuY29udGludWUoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJ1cmwiLCJuZXh0VXJsIiwiY2xvbmUiLCJwYXRobmFtZSIsInRva2VuIiwiY29va2llcyIsInJld3JpdGUiLCJjb250aW51ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./pages/_middleware.js\n");

/***/ })

});