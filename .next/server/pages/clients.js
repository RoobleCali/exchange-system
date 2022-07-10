"use strict";
(() => {
var exports = {};
exports.id = 839;
exports.ids = [839];
exports.modules = {

/***/ 1296:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_table_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6217);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5941);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_clients_Actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3048);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1671);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_table_StatusBill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(322);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_table_Table__WEBPACK_IMPORTED_MODULE_1__, swr__WEBPACK_IMPORTED_MODULE_3__]);
([_components_table_Table__WEBPACK_IMPORTED_MODULE_1__, swr__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{
    const { 0: Data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const fetcher = (url, token)=>{
        token ? axios__WEBPACK_IMPORTED_MODULE_2___default().get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res)=>setData(res.data)
        ) : next_router__WEBPACK_IMPORTED_MODULE_6___default().push("/login");
    };
    const columns = [
        {
            Header: "_id",
            accessor: "_id"
        },
        {
            Header: "FullName",
            accessor: "FullName"
        },
        {
            Header: "RoleName",
            accessor: "RoleName"
        },
        {
            Header: "UserPhone",
            accessor: "UserPhone"
        },
        {
            Header: "Actions",
            accessor: "id",
            Cell: ({ row  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_clients_Actions__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    link: `transactions/${row.id}`,
                    StatusPill: _components_table_StatusBill__WEBPACK_IMPORTED_MODULE_9__/* .StatusPill */ .t
                })
        }
    ];
    const token1 = (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.getCookie)("token");
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])([
        "https://tick-account.herokuapp.com/api/users/",
        token1
    ], fetcher);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_table_Table__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            columns: columns,
            data: Data
        })
    }));
});
const getServerSideProps = async (ctx)=>{
    const resp = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`https://jsonplaceholder.typicode.com/users`);
    return {
        props: {
            Data: resp.data
        }
    };
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

/***/ 8982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

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

/***/ 9945:
/***/ ((module) => {

module.exports = require("react-minimal-pie-chart");

/***/ }),

/***/ 2154:
/***/ ((module) => {

module.exports = require("react-table");

/***/ }),

/***/ 53:
/***/ ((module) => {

module.exports = require("react-to-print");

/***/ }),

/***/ 4466:
/***/ ((module) => {

module.exports = require("react-transition-group");

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
var __webpack_exports__ = __webpack_require__.X(0, [190,675,676,664,801,159,894,498], () => (__webpack_exec__(1296)));
module.exports = __webpack_exports__;

})();