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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookies-next */ \"(middleware)/./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction middleware(req) {\n    const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)(\"token\");\n    const url = req.nextUrl.clone();\n    if (token) {\n        if (req.nextUrl.pathname === \"/login\") {\n            url.pathname = \"/login\";\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.redirect(url);\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.next();\n    }\n    url.pathname = \"/login\";\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.rewrite(url);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vcGFnZXMvX21pZGRsZXdhcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7QUFDRTtBQUVwQyxTQUFTRSxVQUFVLENBQUNDLEdBQUcsRUFBRTtJQUM5QixNQUFNQyxLQUFLLEdBQUdKLHVEQUFTLENBQUMsT0FBTyxDQUFDO0lBQ2hDLE1BQU1LLEdBQUcsR0FBR0YsR0FBRyxDQUFDRyxPQUFPLENBQUNDLEtBQUssRUFBRTtJQUUvQixJQUFJSCxLQUFLLEVBQUU7UUFDVCxJQUFJRCxHQUFHLENBQUNHLE9BQU8sQ0FBQ0UsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUNyQ0gsR0FBRyxDQUFDRyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBRXhCLE9BQU9QLDhEQUFxQixDQUFDSSxHQUFHLENBQUMsQ0FBQztTQUNuQztRQUNELE9BQU9KLDBEQUFpQixFQUFFLENBQUM7S0FDNUI7SUFFREksR0FBRyxDQUFDRyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQ3hCLE9BQU9QLDZEQUFvQixDQUFDSSxHQUFHLENBQUMsQ0FBQztDQUNsQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fbWlkZGxld2FyZS5qcz81MzNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCJjb29raWVzLW5leHRcIjtcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEpIHtcbiAgY29uc3QgdG9rZW4gPSBnZXRDb29raWUoXCJ0b2tlblwiKTtcbiAgY29uc3QgdXJsID0gcmVxLm5leHRVcmwuY2xvbmUoKTtcblxuICBpZiAodG9rZW4pIHtcbiAgICBpZiAocmVxLm5leHRVcmwucGF0aG5hbWUgPT09IFwiL2xvZ2luXCIpIHtcbiAgICAgIHVybC5wYXRobmFtZSA9IFwiL2xvZ2luXCI7XG5cbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QodXJsKTtcbiAgICB9XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XG4gIH1cblxuICB1cmwucGF0aG5hbWUgPSBcIi9sb2dpblwiO1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLnJld3JpdGUodXJsKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRDb29raWUiLCJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxIiwidG9rZW4iLCJ1cmwiLCJuZXh0VXJsIiwiY2xvbmUiLCJwYXRobmFtZSIsInJlZGlyZWN0IiwibmV4dCIsInJld3JpdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./pages/_middleware.js\n");

/***/ })

});