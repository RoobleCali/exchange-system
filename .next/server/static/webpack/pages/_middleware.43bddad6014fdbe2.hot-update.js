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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction middleware(req, res, next) {\n    // check if we have a token in the cookies to send api call if we have no token redirect to login page\n    if (!req.cookies.token) {\n        res.writeHead(302, {\n            Location: \"/login\"\n        });\n        res.end();\n        return;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vcGFnZXMvX21pZGRsZXdhcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBRWpELFNBQVNFLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRTtJQUN6QyxzR0FBc0c7SUFDdEcsSUFBSSxDQUFDRixHQUFHLENBQUNHLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO1FBQ3RCSCxHQUFHLENBQUNJLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFBRUMsUUFBUSxFQUFFLFFBQVE7U0FBRSxDQUFDLENBQUM7UUFDM0NMLEdBQUcsQ0FBQ00sR0FBRyxFQUFFLENBQUM7UUFDVixPQUFPO0tBQ1I7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fbWlkZGxld2FyZS5qcz81MzNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSwgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxLCByZXMsIG5leHQpIHtcbiAgLy8gY2hlY2sgaWYgd2UgaGF2ZSBhIHRva2VuIGluIHRoZSBjb29raWVzIHRvIHNlbmQgYXBpIGNhbGwgaWYgd2UgaGF2ZSBubyB0b2tlbiByZWRpcmVjdCB0byBsb2dpbiBwYWdlXG4gIGlmICghcmVxLmNvb2tpZXMudG9rZW4pIHtcbiAgICByZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogXCIvbG9naW5cIiB9KTtcbiAgICByZXMuZW5kKCk7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiTmV4dFJlcXVlc3QiLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwibmV4dCIsImNvb2tpZXMiLCJ0b2tlbiIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./pages/_middleware.js\n");

/***/ })

});