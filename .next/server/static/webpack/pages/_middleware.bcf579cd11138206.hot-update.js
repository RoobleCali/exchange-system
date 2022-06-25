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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_middlware\": () => (/* binding */ _middlware)\n/* harmony export */ });\n// authorization middleware for all routes based on user role\nfunction _middlware(req, res, next) {\n    const token = req.cookies;\n    // check if use has a token in the cookies and send api call\n    if (!token) {\n        return res.redirect(\"/login\");\n    }\n    next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vcGFnZXMvX21pZGRsZXdhcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZEQUE2RDtBQUV0RCxTQUFTQSxVQUFVLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUU7SUFDekMsTUFBTUMsS0FBSyxHQUFHSCxHQUFHLENBQUNJLE9BQU87SUFDekIsNERBQTREO0lBQzVELElBQUksQ0FBQ0QsS0FBSyxFQUFFO1FBQ1YsT0FBT0YsR0FBRyxDQUFDSSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDL0I7SUFDREgsSUFBSSxFQUFFLENBQUM7Q0FDUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fbWlkZGxld2FyZS5qcz81MzNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGF1dGhvcml6YXRpb24gbWlkZGxld2FyZSBmb3IgYWxsIHJvdXRlcyBiYXNlZCBvbiB1c2VyIHJvbGVcblxuZXhwb3J0IGZ1bmN0aW9uIF9taWRkbHdhcmUocmVxLCByZXMsIG5leHQpIHtcbiAgY29uc3QgdG9rZW4gPSByZXEuY29va2llcztcbiAgLy8gY2hlY2sgaWYgdXNlIGhhcyBhIHRva2VuIGluIHRoZSBjb29raWVzIGFuZCBzZW5kIGFwaSBjYWxsXG4gIGlmICghdG9rZW4pIHtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuICB9XG4gIG5leHQoKTtcbn1cbiJdLCJuYW1lcyI6WyJfbWlkZGx3YXJlIiwicmVxIiwicmVzIiwibmV4dCIsInRva2VuIiwiY29va2llcyIsInJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./pages/_middleware.js\n");

/***/ })

});