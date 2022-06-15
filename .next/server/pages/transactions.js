"use strict";
(() => {
var exports = {};
exports.id = 673;
exports.ids = [673];
exports.modules = {

/***/ 2344:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3224);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_models_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5197);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Table__WEBPACK_IMPORTED_MODULE_1__, _components_models_Actions__WEBPACK_IMPORTED_MODULE_4__, swr__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Table__WEBPACK_IMPORTED_MODULE_1__, _components_models_Actions__WEBPACK_IMPORTED_MODULE_4__, swr__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ daata  })=>{
    const { 0: Data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(daata);
    // fetch data from api and set it to Data state and set loading to false to stop loading spinner and show table using swr library to fetch data from api and set it to Data state and mutate it to Data state
    const fetcher = async (url)=>{
        const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(url);
        return res.data;
    };
    const { data , isValidating  } = (0,swr__WEBPACK_IMPORTED_MODULE_5__["default"])("http://localhosts:3000/api/transactions", fetcher);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (data) {
            // console.log(data);
            setData(data);
            setLoading(false);
        }
    }, [
        data
    ]);
    if (isValidating) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        });
    }
    // colums for the transactions table (id, date, amount, description, category, actions)  with crud operations (create, update, delete) for each row (edit, delete) and a link to the transaction details page (/transactions/:id) for each row
    const columns = [
        {
            Header: "ID",
            accessor: "id"
        },
        {
            Header: "Date",
            accessor: "date"
        },
        {
            Header: "Amount",
            accessor: "amount"
        },
        {
            Header: "Description",
            accessor: "description"
        },
        {
            Header: "Currency",
            accessor: "currency"
        },
        {
            Header: "Status",
            accessor: "status",
            Cell: _components_Table__WEBPACK_IMPORTED_MODULE_1__/* .StatusPill */ .t
        },
        // actions column with crud operations (create, update, delete) for each row (edit, delete) and a link to the transaction details page (/transactions/:id) for each row
        {
            Header: "Actions",
            accessor: "_id",
            Cell: ({ row  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_models_Actions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    link: `transactions/${row.id}`,
                    StatusPill: _components_Table__WEBPACK_IMPORTED_MODULE_1__/* .StatusPill */ .t
                })
        }, 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Table__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            columns: columns,
            data: Data
        })
    });
});
// get sercver side props in nextjs with token to fetch table data
const getServerSideProps = async (ctx)=>{
    console.log(ctx.req.headers.cookie);
    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`http://localhost:3000/api/transactions`);
    return {
        props: {
            daata: res.data
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

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

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

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

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,197,224], () => (__webpack_exec__(2344)));
module.exports = __webpack_exports__;

})();