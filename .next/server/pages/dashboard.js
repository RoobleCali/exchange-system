"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./components/utils/Datefilter.js":
/*!****************************************!*\
  !*** ./components/utils/Datefilter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_flatpickr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-flatpickr */ \"react-flatpickr\");\n/* harmony import */ var react_flatpickr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_flatpickr__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Datepicker() {\n    const options = {\n        mode: \"range\",\n        static: true,\n        monthSelectorType: \"static\",\n        dateFormat: \"M j, Y\",\n        defaultDate: [\n            new Date().setDate(new Date().getDate() - 6),\n            new Date()\n        ],\n        prevArrow: '<svg class=\"fill-current\" width=\"7\" height=\"11\" viewBox=\"0 0 7 11\"><path d=\"M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z\" /></svg>',\n        nextArrow: '<svg class=\"fill-current\" width=\"7\" height=\"11\" viewBox=\"0 0 7 11\"><path d=\"M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z\" /></svg>',\n        onReady: (selectedDates, dateStr, instance)=>{\n            instance.element.value = dateStr.replace(\"to\", \"-\");\n        },\n        onChange: (selectedDates, dateStr, instance)=>{\n            instance.element.value = dateStr.replace(\"to\", \"-\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_flatpickr__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"font-medium p-14 form-input pl-9 text-slate-500 hover:text-slate-600 focus:border-slate-300 w-60\",\n                options: options\n            }, void 0, false, {\n                fileName: \"/Users/darursoft/Documents/echange-system/components/utils/Datefilter.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 right-auto flex items-center pointer-events-none\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"w-4 h-4 ml-3 fill-current text-slate-500\",\n                    viewBox: \"0 0 16 16\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/darursoft/Documents/echange-system/components/utils/Datefilter.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/darursoft/Documents/echange-system/components/utils/Datefilter.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/darursoft/Documents/echange-system/components/utils/Datefilter.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/darursoft/Documents/echange-system/components/utils/Datefilter.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Datepicker);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3V0aWxzL0RhdGVmaWx0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2M7QUFFeEMsU0FBU0UsVUFBVSxHQUFHO0lBQ3BCLE1BQU1DLE9BQU8sR0FBRztRQUNkQyxJQUFJLEVBQUUsT0FBTztRQUNiQyxNQUFNLEVBQUUsSUFBSTtRQUNaQyxpQkFBaUIsRUFBRSxRQUFRO1FBQzNCQyxVQUFVLEVBQUUsUUFBUTtRQUNwQkMsV0FBVyxFQUFFO1lBQUMsSUFBSUMsSUFBSSxFQUFFLENBQUNDLE9BQU8sQ0FBQyxJQUFJRCxJQUFJLEVBQUUsQ0FBQ0UsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQUUsSUFBSUYsSUFBSSxFQUFFO1NBQUM7UUFDdkVHLFNBQVMsRUFDUCw4SEFBOEg7UUFDaElDLFNBQVMsRUFDUCw4SEFBOEg7UUFDaElDLE9BQU8sRUFBRSxDQUFDQyxhQUFhLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxHQUFLO1lBQzdDQSxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHSCxPQUFPLENBQUNJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDckQ7UUFDREMsUUFBUSxFQUFFLENBQUNOLGFBQWEsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEdBQUs7WUFDOUNBLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxLQUFLLEdBQUdILE9BQU8sQ0FBQ0ksT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNyRDtLQUNGO0lBRUQscUJBQ0UsOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGVBQWU7OzBCQUM1Qiw4REFBQ3RCLHdEQUFTO2dCQUNSc0IsU0FBUyxFQUFDLGtHQUFrRztnQkFDNUdwQixPQUFPLEVBQUVBLE9BQU87Ozs7O29CQUNoQjswQkFDRiw4REFBQ21CLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxtRUFBbUU7MEJBQ2hGLDRFQUFDQyxLQUFHO29CQUNGRCxTQUFTLEVBQUMsMENBQTBDO29CQUNwREUsT0FBTyxFQUFDLFdBQVc7OEJBRW5CLDRFQUFDQyxNQUFJO3dCQUFDQyxDQUFDLEVBQUMsOEdBQThHOzs7Ozs0QkFBRzs7Ozs7d0JBQ3JIOzs7OztvQkFDRjs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0FBRUQsaUVBQWV6QixVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGNoYW5nZS1zeXN0ZW0vLi9jb21wb25lbnRzL3V0aWxzL0RhdGVmaWx0ZXIuanM/MDE2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmxhdHBpY2tyIGZyb20gXCJyZWFjdC1mbGF0cGlja3JcIjtcblxuZnVuY3Rpb24gRGF0ZXBpY2tlcigpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtb2RlOiBcInJhbmdlXCIsXG4gICAgc3RhdGljOiB0cnVlLFxuICAgIG1vbnRoU2VsZWN0b3JUeXBlOiBcInN0YXRpY1wiLFxuICAgIGRhdGVGb3JtYXQ6IFwiTSBqLCBZXCIsXG4gICAgZGVmYXVsdERhdGU6IFtuZXcgRGF0ZSgpLnNldERhdGUobmV3IERhdGUoKS5nZXREYXRlKCkgLSA2KSwgbmV3IERhdGUoKV0sXG4gICAgcHJldkFycm93OlxuICAgICAgJzxzdmcgY2xhc3M9XCJmaWxsLWN1cnJlbnRcIiB3aWR0aD1cIjdcIiBoZWlnaHQ9XCIxMVwiIHZpZXdCb3g9XCIwIDAgNyAxMVwiPjxwYXRoIGQ9XCJNNS40IDEwLjhsMS40LTEuNC00LTQgNC00TDUuNCAwIDAgNS40elwiIC8+PC9zdmc+JyxcbiAgICBuZXh0QXJyb3c6XG4gICAgICAnPHN2ZyBjbGFzcz1cImZpbGwtY3VycmVudFwiIHdpZHRoPVwiN1wiIGhlaWdodD1cIjExXCIgdmlld0JveD1cIjAgMCA3IDExXCI+PHBhdGggZD1cIk0xLjQgMTAuOEwwIDkuNGw0LTQtNC00TDEuNCAwbDUuNCA1LjR6XCIgLz48L3N2Zz4nLFxuICAgIG9uUmVhZHk6IChzZWxlY3RlZERhdGVzLCBkYXRlU3RyLCBpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZWxlbWVudC52YWx1ZSA9IGRhdGVTdHIucmVwbGFjZShcInRvXCIsIFwiLVwiKTtcbiAgICB9LFxuICAgIG9uQ2hhbmdlOiAoc2VsZWN0ZWREYXRlcywgZGF0ZVN0ciwgaW5zdGFuY2UpID0+IHtcbiAgICAgIGluc3RhbmNlLmVsZW1lbnQudmFsdWUgPSBkYXRlU3RyLnJlcGxhY2UoXCJ0b1wiLCBcIi1cIik7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcC0yNFwiPlxuICAgICAgPEZsYXRwaWNrclxuICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBwLTE0IGZvcm0taW5wdXQgcGwtOSB0ZXh0LXNsYXRlLTUwMCBob3Zlcjp0ZXh0LXNsYXRlLTYwMCBmb2N1czpib3JkZXItc2xhdGUtMzAwIHctNjBcIlxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCByaWdodC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBoLTQgbWwtMyBmaWxsLWN1cnJlbnQgdGV4dC1zbGF0ZS01MDBcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGggZD1cIk0xNSAyaC0yVjBoLTJ2Mkg5VjBIN3YySDVWMEgzdjJIMWExIDEgMCAwMC0xIDF2MTJhMSAxIDAgMDAxIDFoMTRhMSAxIDAgMDAxLTFWM2ExIDEgMCAwMC0xLTF6bS0xIDEySDJWNmgxMnY4elwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVwaWNrZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGbGF0cGlja3IiLCJEYXRlcGlja2VyIiwib3B0aW9ucyIsIm1vZGUiLCJzdGF0aWMiLCJtb250aFNlbGVjdG9yVHlwZSIsImRhdGVGb3JtYXQiLCJkZWZhdWx0RGF0ZSIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsIm9uUmVhZHkiLCJzZWxlY3RlZERhdGVzIiwiZGF0ZVN0ciIsImluc3RhbmNlIiwiZWxlbWVudCIsInZhbHVlIiwicmVwbGFjZSIsIm9uQ2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3ZnIiwidmlld0JveCIsInBhdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/utils/Datefilter.js\n");

/***/ }),

/***/ "./pages/dashboard/index.js":
/*!**********************************!*\
  !*** ./pages/dashboard/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ index)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_utils_Datefilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/utils/Datefilter */ \"./components/utils/Datefilter.js\");\n\n\nfunction index() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"dashboard\"\n        }, void 0, false, {\n            fileName: \"/Users/darursoft/Documents/echange-system/pages/dashboard/index.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/darursoft/Documents/echange-system/pages/dashboard/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTJEO0FBRTVDLFNBQVNDLEtBQUssR0FBRztJQUM5QixxQkFDRSw4REFBQ0MsS0FBRztrQkFDRiw0RUFBQ0MsSUFBRTtzQkFBQyxXQUFTOzs7OztnQkFBSzs7Ozs7WUFDZCxDQUNOO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGNoYW5nZS1zeXN0ZW0vLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXguanM/NmQ4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0ZXBpY2tlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlscy9EYXRlZmlsdGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPmRhc2hib2FyZDwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJEYXRlcGlja2VyIiwiaW5kZXgiLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-flatpickr":
/*!**********************************!*\
  !*** external "react-flatpickr" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-flatpickr");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/dashboard/index.js"));
module.exports = __webpack_exports__;

})();