"use strict";
exports.id = 573;
exports.ids = [573];
exports.modules = {

/***/ 3573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NS": () => (/* binding */ addUserEnd),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports loginSlice, addUserStart, addUserFail */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

// initial state for the login slice
const loginSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState: {
        user: [],
        pending: false,
        error: false,
        loggedIn: false
    },
    reducers: {
        updateStart: (state)=>{
            state.pending = true;
        },
        // add user start
        addUserStart: (state)=>{
            state.pending = true;
        },
        // add user end
        addUserEnd: (state, action)=>{
            state.pending = false;
            state.user = action.payload;
            state.loggedIn = true;
        },
        // add user fail
        addUserFail: (state)=>{
            state.pending = false;
            state.error = true;
        }
    }
});
const { addUserStart , addUserEnd , addUserFail  } = loginSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginSlice.reducer);


/***/ })

};
;