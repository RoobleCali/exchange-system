"use strict";
exports.id = 415;
exports.ids = [415];
exports.modules = {

/***/ 2329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/onlyLogo.7b59a264.png","height":97,"width":97,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAt0lEQVR42mPgMXzGyWP0QhSIRYBYiMfolQwDEPAYv9XmMX7fxwAkzgHxViDeAsQHgbifx+i1JpD+DsS7GIAqD3KobWbhMXrJCtH5Rh4o8R+IVzNABZYCjY0HClwE6tQF0n94jd+vYQACmIId3Pr3BIESV6A6ZwMVuPMaf4iGKdiKUPwOLMhr8qECiEtggneAOJHH5EMcUHcQEAcC8V6gCdkQBUYva4G4H4onAXEfGBu/UWVgYGAAAPuRVeTPCOFFAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 4225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const login = (user)=>{
    const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)("token");
    if (user.userType === "HQ-ADMIN" || user.userType === "BranchAdmin") {
        next_router__WEBPACK_IMPORTED_MODULE_2___default().replace("/wallet");
    }
    if (token == null) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default().replace("/login");
    }
    const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);
    if (user.userType !== "BranchAdmin" && decoded.roles.length == 0) {
        return alert("You are not authorized to access this page");
    }
    const route = decoded.roles[0].path.toLowerCase();
    next_router__WEBPACK_IMPORTED_MODULE_2___default().replace(route);
};


/***/ }),

/***/ 4415:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _assets_onlyLogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2329);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_slices_loginSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3573);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_utils_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4225);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var better_react_spinkit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4112);
/* harmony import */ var better_react_spinkit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(better_react_spinkit__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];











function FormLogin() {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const { register , handleSubmit , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const { 0: message , 1: setmessage  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("");
    const onSubmit = (data)=>{
        const res1 = axios__WEBPACK_IMPORTED_MODULE_5___default().post("https://tick-account.herokuapp.com/api/auth/login", data);
        setLoading(true);
        res1.then((res)=>{
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.setCookies)("token", res.data.user.accessToken);
            dispatch((0,_redux_slices_loginSlice__WEBPACK_IMPORTED_MODULE_6__/* .addUserEnd */ .NS)(res.data.user));
            (0,_components_utils_Login__WEBPACK_IMPORTED_MODULE_8__/* .login */ .x)(res.data.user);
            setLoading(false);
        }).catch((err)=>{
            // get error message from server and show it
            setLoading(false);
            let errorMessage = "";
            if (err.message === "Network Error") {
                setmessage("please check your internet connection");
            }
            if (err.response) {
                setmessage(err.response.data.message);
            }
            console.log(errorMessage);
        });
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: " w-full md:ml-5 dark:bg-gray-800 rounded-xl h-[80vh] md:h-auto px-2 md:px-0 md:w-1/2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center items-container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        src: _assets_onlyLogo_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                        alt: ""
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-10 text-2xl text-center text-gray-600 dark:text-white",
                    children: "WELCOME BACK !"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-2 text-xl text-center text-gray-400 ",
                    children: "please sign in your credentials to continue"
                }),
                message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-4 text-center text-red-500",
                    children: message
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    className: "w-full mt-5 space-y-7 ",
                    onSubmit: handleSubmit(onSubmit),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col mx-2 space-y-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "font-medium text-gray-500 text-md",
                                    htmlFor: "userName",
                                    children: "userName"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: `w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border
               border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 
                 ${errors.userName ? "ring-2 ring-red-400" : null}`,
                                    placeholder: "userName",
                                    ...register("userName", {
                                        required: true
                                    })
                                }),
                                errors.userName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "py-2 text-sm text-red-400",
                                    children: "user name is required"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col mx-2 space-y-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "font-medium text-gray-500 text-md",
                                    htmlFor: "userName",
                                    children: "password"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "password",
                                    ...register("password", {
                                        required: true
                                    }),
                                    className: `w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border
              border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 
                ${errors.password ? "ring-2 ring-red-400" : null}`,
                                    placeholder: "password"
                                }),
                                errors.password && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm text-red-400",
                                    children: "This field is required"
                                })
                            ]
                        }),
                        loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            class: "flex space-x-6 items-center w-full rounded-lg bg-[#FD5353] text-center justify-center text-2xl px-4 py-2 text-white",
                            disabled: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(better_react_spinkit__WEBPACK_IMPORTED_MODULE_10__.DoubleBounce, {
                                    color: "white",
                                    size: 30
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    class: "font-medium",
                                    children: " Loading... "
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "w-full px-10 py-2 text-2xl text-white duration-300 ease-in bg-blue-600 rounded-md hover:bg-blue-500 hover:drop-shadow-md",
                            type: "submit",
                            children: "Login"
                        })
                    ]
                })
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormLogin);

});

/***/ }),

/***/ 3573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NS": () => (/* binding */ addUserEnd)
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
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (loginSlice.reducer);


/***/ })

};
;