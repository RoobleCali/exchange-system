"use strict";
exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 2679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1672);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    const { theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sticky top-0 z-30 overflow-hidden text-gray-700 shadow-md dark:text-gray-100 ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-wrap items-center justify-between p-2 px-2 text-center shadow-lg md:p-4 md:px-24 ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                        alt: "logo",
                        width: 190,
                        height: 36,
                        className: "cursor-pointer"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center space-x-3",
                    children: [
                        theme === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {
                            onClick: ()=>setTheme("light")
                            ,
                            className: "cursor-pointer w-7"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {
                            onClick: ()=>setTheme("dark")
                            ,
                            className: "cursor-pointer w-7"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/login",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "px-5 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
                                children: "login"
                            })
                        })
                    ]
                })
            ]
        })
    }));
});


/***/ })

};
;