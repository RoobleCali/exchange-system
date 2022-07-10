"use strict";
(() => {
var exports = {};
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 6390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Actions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

/* This example requires Tailwind CSS v2.0+ */ 



function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function Actions({ link  }) {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
            as: "div",
            className: "relative inline-block text-left",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Button, {
                        className: "inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black rounded-md bg-gray-50 dark:bg-gray-800 dark:text-white ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.DotsVerticalIcon, {
                            className: "w-5 h-5"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    enter: "transition ease-out duration-100",
                    enterFrom: "transform opacity-0 scale-95",
                    enterTo: "transform opacity-100 scale-100",
                    leave: "transition ease-in duration-75",
                    leaveFrom: "transform opacity-100 scale-100",
                    leaveTo: "transform opacity-0 scale-95",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Items, {
                        className: "absolute right-0 z-50 w-56 mr-10 overflow-hidden bg-gray-100 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "py-2 space-y-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    children: ({ active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "#",
                                            className: classNames(active ? "bg-gray-100 text-gray-900 " : "text-gray-700", "  px-4 py-2 flex  items-center overflow-hidden  text-sm"),
                                            onClick: ()=>setOpen(!open)
                                            ,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.XCircleIcon, {
                                                    className: "w-5 text-red-500 opacity-60"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "ml-2",
                                                    children: " Old Transactions"
                                                })
                                            ]
                                        })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                            href: link,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: classNames(active ? "bg-gray-100 text-gray-900 " : "text-gray-700", "  px-4 py-2 flex   items-center    text-sm"),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.InformationCircleIcon, {
                                                        className: "w-5 text-gray-500"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "ml-2",
                                                        children: "View Transactions"
                                                    })
                                                ]
                                            })
                                        })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ StatusPill)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function StatusPill({ value  }) {
    const status = value ? value.toLowerCase() : "unknown";
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: `  
         ${status.startsWith("success") ? "bg-green-100 text-green-500 px-4 py-1 text-sm  w-max truncate rounded-md" : null}
          ${status.startsWith("pending") ? "bg-orange-100 text-orange-500 px-4 py-1 text-sm  rounded-md truncate" : null}
          ${status.startsWith("error") ? "   text-red-700 bg-red-100  px-7 py-1 text-sm w-32  truncate rounded-md" : null} 
      
   `,
        children: status
    }));
}


/***/ }),

/***/ 2000:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_table_Actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6390);
/* harmony import */ var _components_table_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6217);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1671);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_table_StatusBill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(322);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_table_Table__WEBPACK_IMPORTED_MODULE_3__, _components_table_Actions__WEBPACK_IMPORTED_MODULE_2__]);
([_components_table_Table__WEBPACK_IMPORTED_MODULE_3__, _components_table_Actions__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ data  })=>{
    // colums for the transactions table (id, date, amount, description, category, actions)  with crud operations (create, update, delete) for each row (edit, delete) and a link to the transaction details page (/transactions/:id) for each row
    const columns = [
        {
            Header: "ID",
            accessor: "id"
        },
        {
            Header: "name",
            accessor: "name"
        },
        {
            Header: "username",
            accessor: "username"
        },
        {
            Header: "email",
            accessor: "email"
        },
        {
            Header: "phone",
            accessor: "phone"
        },
        {
            Header: "Status",
            accessor: "status",
            Cell: _components_table_StatusBill__WEBPACK_IMPORTED_MODULE_6__/* .StatusPill */ .t
        },
        // actions column with crud operations (create, update, delete) for each row (edit, delete) and a link to the transaction details page (/transactions/:id) for each row
        {
            Header: "Actions",
            Cell: ({ row  })=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_table_Actions__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    link: `/invoices/${row.id}`,
                    StatusPill: _components_table_StatusBill__WEBPACK_IMPORTED_MODULE_6__/* .StatusPill */ .t
                }));
            }
        }, 
    ];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_table_Table__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            data: data,
            columns: columns
        })
    }));
});
const getServerSideProps = async ({ req , res  })=>{
    const token = req.cookies;
    if (!token) {
        res.writeHead(302, {
            Location: "/login"
        });
        res.end();
    } else {
        try {
            const resp = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`https://jsonplaceholder.typicode.com/users`);
            return {
                props: {
                    data: resp.data
                }
            };
        } catch (error) {
            console.log(error);
        }
    }
};

});

/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 1143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 2154:
/***/ ((module) => {

module.exports = require("react-table");

/***/ }),

/***/ 53:
/***/ ((module) => {

module.exports = require("react-to-print");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1671:
/***/ ((module) => {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,159], () => (__webpack_exec__(2000)));
module.exports = __webpack_exports__;

})();