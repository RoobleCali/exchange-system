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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction middleware(req) {\n    const url = req.nextUrl.clone();\n    url.pathname = \"/login\";\n    const token = req.cookies.token;\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.rewrite(url);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vcGFnZXMvX21pZGRsZXdhcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBRXBDLFNBQVNDLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFO0lBQzlCLE1BQU1DLEdBQUcsR0FBR0QsR0FBRyxDQUFDRSxPQUFPLENBQUNDLEtBQUssRUFBRTtJQUMvQkYsR0FBRyxDQUFDRyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQ3hCLE1BQU1DLEtBQUssR0FBR0wsR0FBRyxDQUFDTSxPQUFPLENBQUNELEtBQUs7SUFDL0IsT0FBT1AsNkRBQW9CLENBQUNHLEdBQUcsQ0FBQyxDQUFDO0NBQ2xDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19taWRkbGV3YXJlLmpzPzUzM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcSkge1xuICBjb25zdCB1cmwgPSByZXEubmV4dFVybC5jbG9uZSgpO1xuICB1cmwucGF0aG5hbWUgPSBcIi9sb2dpblwiO1xuICBjb25zdCB0b2tlbiA9IHJlcS5jb29raWVzLnRva2VuO1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLnJld3JpdGUodXJsKTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxIiwidXJsIiwibmV4dFVybCIsImNsb25lIiwicGF0aG5hbWUiLCJ0b2tlbiIsImNvb2tpZXMiLCJyZXdyaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./pages/_middleware.js\n");

/***/ })

});