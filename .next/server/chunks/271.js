"use strict";
exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 2271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1400);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__);



function StatisCards() {
    // statis json data
    const statisData = [
        {
            title: "Total Balance",
            value: "$1,000,000",
            icon: "💰",
            bg: "bg-green-200",
            progress: "100"
        },
        {
            title: "Total Assets",
            value: "$1,000,000",
            icon: "💰",
            bg: "bg-green-200",
            progress: "100"
        },
        {
            title: "Total Assets",
            value: "$1,000,000",
            icon: "💰",
            bg: "bg-green-200",
            progress: "100"
        },
        {
            title: "New Assets",
            value: "$1,000,000",
            icon: "💰",
            bg: "bg-green-200",
            progress: "100"
        }, 
    ];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "grid justify-between grid-cols-2 gap-3 mt-4 bg-white rounded-md sm:p-2 dark:bg-gray-700 lg:grid-cols-4 ",
            children: statisData.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid w-full grid-cols-2 gap-3 mt-4 bg-white rounded-md sm:p-2 dark:bg-gray-700 lg:grid-cols-4 ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " flex bg-[#efe1f5] col-span-4 dark:bg-[#4f4f50] dark:text-gray-200 space-x-2 rounded-md p-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-10",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__.CircularProgressbar, {
                                    value: item.progress,
                                    styles: {
                                        path: {
                                            stroke: "#AC39D4"
                                        }
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-xs truncate md:text-sm",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-gray-600 truncate dark:text-gray-200",
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-gray-500 dark:text-gray-400 text-[10px]",
                                            children: item.value
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }, index)
            )
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatisCards);


/***/ })

};
;