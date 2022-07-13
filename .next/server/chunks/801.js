"use strict";
exports.id = 801;
exports.ids = [801];
exports.modules = {

/***/ 4801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Transactions() {
    // transactions json data
    const transactions = [
        {
            id: 1,
            phone: "0123456789",
            CustFullName: "John Doe",
            AccountNumber: "123456789",
            date: "June 3, 2020, 08:22 AM",
            type: "MasterCard 453",
            Status: "Pending"
        },
        {
            id: 1,
            phone: "0123456789",
            CustFullName: "John Doe",
            AccountNumber: "123456789",
            date: "June 3, 2020, 08:22 AM",
            type: "MasterCard 453",
            Status: "Pending"
        },
        {
            id: 1,
            phone: "0123456789",
            CustFullName: "John Doe",
            AccountNumber: "123456789",
            date: "June 3, 2020, 08:22 AM",
            type: "MasterCard 453",
            Status: "Pending"
        },
        {
            id: 1,
            phone: "0123456789",
            CustFullName: "John Doe",
            AccountNumber: "123456789",
            date: "June 3, 2020, 08:22 AM",
            type: "MasterCard 453",
            Status: "Pending"
        }, 
    ];
    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "overflow-hidden overflow-x-scroll",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-700 dark:text-gray-300 tex-[8px] md:text-md",
                                children: "latest transactions"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-gray-500 dark:text-gray-300 hidden md:inline-flex text-[13px]",
                                children: "this is the transactions page to see whats going on"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "flex items-center mb-3 space-x-4 text-gray-700 dark:text-gray-300",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "text-[9px] sm:text-xs",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                        href: "/wallet",
                                        children: "Monthly"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: " text-[9px] sm:text-xs ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                        href: "/wallet",
                                        children: "Weekly"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: "text-[9px] sm:text-xs",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            href: "/wallet",
                                            children: "Today"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                            className: "border-b rounded-md md:border-b-4 border-b-blue-600"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "z-50 mt-5 space-y-5 overflow-x-scroll",
                children: transactions.map((transaction, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between text-xs space-x-14",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-700 truncate dark:text-gray-300 w-max",
                                children: transaction.phone
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-700 truncate dark:text-gray-300 w-max",
                                children: transaction.CustFullName
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-700 truncate dark:text-gray-300 w-max ",
                                children: transaction.AccountNumber
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-700 truncate dark:text-gray-300 w-max ",
                                children: transaction.date
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-700 truncate dark:text-gray-300 w-max ",
                                children: transaction.type
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "px-4 py-2 text-white truncate bg-green-500 rounded-md w-max",
                                children: transaction.Status
                            })
                        ]
                    }, index)
                )
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transactions);


/***/ })

};
;