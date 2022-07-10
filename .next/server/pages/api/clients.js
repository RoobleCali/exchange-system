"use strict";
(() => {
var exports = {};
exports.id = 338;
exports.ids = [338];
exports.modules = {

/***/ 721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _Customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1965);

function handler(req, res) {
    res.status(200).json(_Customer__WEBPACK_IMPORTED_MODULE_0__.Data);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [965], () => (__webpack_exec__(721)));
module.exports = __webpack_exports__;

})();