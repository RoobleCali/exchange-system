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

/***/ "./pages/dashboard/index.js":
/*!**********************************!*\
  !*** ./pages/dashboard/index.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ index)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\nconst Price = ({ control , index  })=>{\n    const value = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch)({\n        control,\n        name: `items[${index}]`,\n        defaultValue: {}\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: (value.type || 0) * (value.amount || 0)\n    }, void 0, false, {\n        fileName: \"/Users/darursoft/Documents/echange-system/pages/dashboard/index.js\",\n        lineNumber: 10,\n        columnNumber: 10\n    }, undefined));\n};\nconst PriceTotal = ({ control  })=>{\n    const value = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch)({\n        control,\n        name: `items`,\n        defaultValue: {}\n    });\n    console.log(value);\n    return null;\n};\nfunction index() {\n    const { register , control , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();\n    const { fields , append , remove  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFieldArray)({\n        control,\n        name: \"items\"\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit(console.log),\n        children: [\n            fields.map(({ id , name  }, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: name,\n                    type: \"text\",\n                    ref: register\n                }, id, false, {\n                    fileName: \"/Users/darursoft/Documents/echange-system/pages/dashboard/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\"\n            }, void 0, false, {\n                fileName: \"/Users/darursoft/Documents/echange-system/pages/dashboard/index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceTotal, {\n                control: control\n            }, void 0, false, {\n                fileName: \"/Users/darursoft/Documents/echange-system/pages/dashboard/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/darursoft/Documents/echange-system/pages/dashboard/index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this));\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUN5QztBQUVsRSxLQUFLLENBQUNJLEtBQUssSUFBSSxDQUFDLENBQUNDLE9BQU8sR0FBRUMsS0FBSyxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQ3JDLEtBQUssQ0FBQ0MsS0FBSyxHQUFHSix5REFBUSxDQUFDLENBQUM7UUFDdEJFLE9BQU87UUFDUEcsSUFBSSxHQUFHLE1BQU0sRUFBRUYsS0FBSyxDQUFDLENBQUM7UUFDdEJHLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUNELE1BQU0sNkVBQUVDLENBQUk7bUJBQUdILEtBQUssQ0FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBS0osS0FBSyxDQUFDSyxNQUFNLElBQUksQ0FBQzs7Ozs7O0FBQ3RELENBQUM7QUFFRCxLQUFLLENBQUNDLFVBQVUsSUFBSSxDQUFDLENBQUNSLE9BQU8sRUFBQyxDQUFDLEdBQUssQ0FBQztJQUNuQyxLQUFLLENBQUNFLEtBQUssR0FBR0oseURBQVEsQ0FBQyxDQUFDO1FBQ3RCRSxPQUFPO1FBQ1BHLElBQUksR0FBRyxLQUFLO1FBQ1pDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVESyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsS0FBSztJQUNqQixNQUFNLENBQUMsSUFBSTtBQUNiLENBQUM7QUFFYyxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFDO0lBQy9CLEtBQUssQ0FBQyxDQUFDLENBQUNVLFFBQVEsR0FBRVgsT0FBTyxHQUFFWSxZQUFZLEVBQUMsQ0FBQyxHQUFHaEIsd0RBQU87SUFDbkQsS0FBSyxDQUFDLENBQUMsQ0FBQ2lCLE1BQU0sR0FBRUMsTUFBTSxHQUFFQyxNQUFNLEVBQUMsQ0FBQyxHQUFHbEIsOERBQWEsQ0FBQyxDQUFDO1FBQ2hERyxPQUFPO1FBQ1BHLElBQUksRUFBRSxDQUFPO0lBQ2YsQ0FBQztJQUVELE1BQU0sNkVBQ0hhLENBQUk7UUFBQ0MsUUFBUSxFQUFFTCxZQUFZLENBQUNILE9BQU8sQ0FBQ0MsR0FBRzs7WUFDckNHLE1BQU0sQ0FBQ0ssR0FBRyxFQUFFLENBQUMsQ0FBQ0MsRUFBRSxHQUFFaEIsSUFBSSxFQUFDLENBQUMsRUFBRUYsS0FBSywrRUFDN0JtQixDQUFLO29CQUFVakIsSUFBSSxFQUFFQSxJQUFJO29CQUFFRyxJQUFJLEVBQUMsQ0FBTTtvQkFBQ2UsR0FBRyxFQUFFVixRQUFRO21CQUF6Q1EsRUFBRTs7Ozs7O3dGQUdmQyxDQUFLO2dCQUFDZCxJQUFJLEVBQUMsQ0FBUTs7Ozs7O3dGQUVuQkUsVUFBVTtnQkFBQ1IsT0FBTyxFQUFFQSxPQUFPOzs7Ozs7Ozs7Ozs7QUFHbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Y2hhbmdlLXN5c3RlbS8uL3BhZ2VzL2Rhc2hib2FyZC9pbmRleC5qcz82ZDhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSwgdXNlRmllbGRBcnJheSwgdXNlV2F0Y2ggfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcblxyXG5jb25zdCBQcmljZSA9ICh7IGNvbnRyb2wsIGluZGV4IH0pID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IHVzZVdhdGNoKHtcclxuICAgIGNvbnRyb2wsXHJcbiAgICBuYW1lOiBgaXRlbXNbJHtpbmRleH1dYCxcclxuICAgIGRlZmF1bHRWYWx1ZToge30sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIDxzcGFuPnsodmFsdWUudHlwZSB8fCAwKSAqICh2YWx1ZS5hbW91bnQgfHwgMCl9PC9zcGFuPjtcclxufTtcclxuXHJcbmNvbnN0IFByaWNlVG90YWwgPSAoeyBjb250cm9sIH0pID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IHVzZVdhdGNoKHtcclxuICAgIGNvbnRyb2wsXHJcbiAgICBuYW1lOiBgaXRlbXNgLFxyXG4gICAgZGVmYXVsdFZhbHVlOiB7fSxcclxuICB9KTtcclxuXHJcbiAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgY29udHJvbCwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKCk7XHJcbiAgY29uc3QgeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0gPSB1c2VGaWVsZEFycmF5KHtcclxuICAgIGNvbnRyb2wsXHJcbiAgICBuYW1lOiBcIml0ZW1zXCIsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KGNvbnNvbGUubG9nKX0+XHJcbiAgICAgIHtmaWVsZHMubWFwKCh7IGlkLCBuYW1lIH0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGlucHV0IGtleT17aWR9IG5hbWU9e25hbWV9IHR5cGU9XCJ0ZXh0XCIgcmVmPXtyZWdpc3Rlcn0gLz5cclxuICAgICAgKSl9XHJcblxyXG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcblxyXG4gICAgICA8UHJpY2VUb3RhbCBjb250cm9sPXtjb250cm9sfSAvPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRm9ybSIsInVzZUZpZWxkQXJyYXkiLCJ1c2VXYXRjaCIsIlByaWNlIiwiY29udHJvbCIsImluZGV4IiwidmFsdWUiLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwic3BhbiIsInR5cGUiLCJhbW91bnQiLCJQcmljZVRvdGFsIiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZmllbGRzIiwiYXBwZW5kIiwicmVtb3ZlIiwiZm9ybSIsIm9uU3VibWl0IiwibWFwIiwiaWQiLCJpbnB1dCIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

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