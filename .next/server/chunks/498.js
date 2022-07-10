"use strict";
exports.id = 498;
exports.ids = [498];
exports.modules = {

/***/ 2168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/avatar.fcea2776.png","height":128,"width":128,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCElEQVR42i1NzysEcRz9/A+++QM44KIcKRcX/4CbUqQoV4q25KK9ujg4yQ4pN4UidmbM2iiK1NpJCbs7351mpvzaYczs5+13tn316vN57/Ue6bUfUhSm+6ddf0CmNOu/u4YMBaXI176FEsoqhM0TC1vnN1A/TBmWdachyHAaOcuLcfj4Gm1nF3l/Y5WPS5Xo0vuH8jQy66GjyxBG5ZPZtQG3BOs94Lxst0hSW07Rj6H7zEH1BV/VZxh+k4tBgtSjqyDZObi1MZXJRkend3x28cCTK+uRVrhHwYtzlABdE7MLT0SE5ZklrM1lkN4jY+P2GyCoA0HDo9p0b7+c7+mTNDi0N0DUTUTUAiAnsUnPS0Z3AAAAAElFTkSuQmCC"});

/***/ }),

/***/ 3048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Actions)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./pages/assets/avatar.png
var avatar = __webpack_require__(2168);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
;// CONCATENATED MODULE: ./components/clients/Deposit.js



function DepositModel({ open , setOpen  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "popup",
                className: `z-50 fixed w-full flex justify-center inset-0 ${open ? "flex" : "hidden"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `absolute inset-0 bg-gray-400 text-white bg-opacity-100 z-0  transition-opacity duration-200 ${open ? " opacity-90" : "opacity-0 pointer-events-none"}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container mx-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center justify-center w-full h-full ",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fixed w-[95%] overflow-y-auto bg-white rounded-md shadow dark:bg-gray-800 sm:w-max ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center justify-between bg-gray-100 dark:bg-gray-600 rounded-tl-md rounded-tr-md px-14 md:px-8 md:py-4 py-7",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-base font-semibold dark:text-white",
                                                children: "Deposit Form"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none",
                                                onClick: ()=>setOpen(false)
                                                ,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/add_user-svg1.svg",
                                                    alt: "icon"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "px-4 pt-3 shadow-2xl md:px-10 md:pb-4 pb-7",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex items-center justify-between pb-5",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center space-x-3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                            src: avatar/* default */.Z,
                                                            alt: "",
                                                            width: 50,
                                                            height: 50
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "text-gray-600 text-md dark:text-gray-300",
                                                                    children: "Abdishakuur ally"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-gray-500",
                                                                    children: "+252618995283"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "mt-3",
                                                children: "Current Money"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex flex-col flex-wrap justify-between mt-2 space-y-3 md:items-center md:space-y-0 md:space-x-2 md:flex-row",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "px-2 py-1.5 text-green-600 bg-green-100 rounded-md",
                                                        children: "USD $9, 543, 268"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "px-2 py-1.5 text-red-500 bg-red-100 rounded-md",
                                                        children: "KES $9, 543, 268"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                className: "mt-11",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        placeholder: "Amout",
                                                        className: "w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        placeholder: "Date",
                                                        type: "date",
                                                        className: "block w-full px-3 py-3 mt-3 text-sm text-lg leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mt-6",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                            placeholder: "Description",
                                                            className: "w-full h-24 py-3 pl-3 overflow-y-auto placeholder-gray-500 border border-gray-200 rounded resize-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 focus:outline-none"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                "aria-label": "add user",
                                                role: "button",
                                                className: "w-full px-6 py-3 text-sm text-white bg-indigo-700 rounded shadow focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 focus:outline-none hover:bg-opacity-80",
                                                children: "Deposit"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    }));
}
/* harmony default export */ const clients_Deposit = (DepositModel);

;// CONCATENATED MODULE: ./components/clients/Withdraw.js



function WithdrawModel({ open , setOpen  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "popup",
                className: `z-50 fixed w-full flex justify-center inset-0 ${open ? "flex" : "hidden"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `absolute inset-0 bg-gray-400 text-white bg-opacity-100 z-0  transition-opacity duration-200 ${open ? " opacity-90" : "opacity-0 pointer-events-none"}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container mx-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center justify-center w-full h-full ",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fixed w-[95%] overflow-y-auto bg-white rounded-md shadow dark:bg-gray-800 sm:w-max ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center justify-between bg-gray-100 dark:bg-gray-600 rounded-tl-md rounded-tr-md px-14 md:px-8 md:py-4 py-7",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-base font-semibold dark:text-white",
                                                children: "Withdraw Form"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none",
                                                onClick: ()=>setOpen(false)
                                                ,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/add_user-svg1.svg",
                                                    alt: "icon"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "px-4 pt-3 shadow-2xl md:px-10 md:pb-4 pb-7",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex items-center justify-between pb-5",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center space-x-3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                            src: avatar/* default */.Z,
                                                            alt: "",
                                                            width: 50,
                                                            height: 50
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "text-gray-600 text-md dark:text-gray-300",
                                                                    children: "Abdishakuur ally"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-gray-500",
                                                                    children: "+252618995283"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "mt-3",
                                                children: "Current Money"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex flex-col flex-wrap justify-between mt-2 space-y-3 md:items-center md:space-y-0 md:space-x-2 md:flex-row",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "px-2 py-1.5 text-green-600 bg-green-100 rounded-md",
                                                        children: "USD $9, 543, 268"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "px-2 py-1.5 text-red-500 bg-red-100 rounded-md",
                                                        children: "KES $9, 543, 268"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                className: "mt-11",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        placeholder: "Amout",
                                                        className: "w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        placeholder: "Date",
                                                        type: "date",
                                                        className: "block w-full px-3 py-3 mt-3 text-sm text-lg leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mt-6",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                            placeholder: "Description",
                                                            className: "w-full h-24 py-3 pl-3 overflow-y-auto placeholder-gray-500 border border-gray-200 rounded resize-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 focus:outline-none"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                "aria-label": "add user",
                                                role: "button",
                                                className: "w-full px-6 py-3 text-sm text-white bg-indigo-700 rounded shadow focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 focus:outline-none hover:bg-opacity-80",
                                                children: "Withdraw"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    }));
}
/* harmony default export */ const clients_Withdraw = (WithdrawModel);

;// CONCATENATED MODULE: ./components/clients/Transfer.js



function TransferModel({ open , setOpen  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "popup",
                className: `z-50 fixed w-full flex justify-center inset-0 ${open ? "flex" : "hidden"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `absolute inset-0 bg-gray-400 text-white bg-opacity-100 z-0  transition-opacity duration-200 ${open ? " opacity-90" : "opacity-0 pointer-events-none"}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container mx-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center justify-center w-full h-full",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fixed overflow-y-auto bg-white rounded-md shadow dark:bg-gray-800 w-max ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center justify-between px-4 bg-gray-100 dark:bg-gray-600 rounded-tl-md rounded-tr-md md:px-8 md:py-4 py-7",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-base font-semibold dark:text-white",
                                                children: "Transfer Form"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none",
                                                onClick: ()=>setOpen(false)
                                                ,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/add_user-svg1.svg",
                                                    alt: "icon"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "px-4 pt-3 shadow-2xl md:px-10 md:pb-4 pb-7",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex items-center justify-between pb-5",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center space-x-3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                            src: avatar/* default */.Z,
                                                            alt: "",
                                                            width: 50,
                                                            height: 50
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "text-gray-600 text-md dark:text-gray-300",
                                                                    children: "Abdishakuur ally"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-gray-500",
                                                                    children: "+252618995283"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "mt-3",
                                                children: "Current Money"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex flex-col flex-wrap justify-between mt-2 space-y-3 md:items-center md:space-y-0 md:space-x-2 md:flex-row",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "px-2 py-1.5 text-green-600 bg-green-100 rounded-md",
                                                        children: "USD $9, 543, 268"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "px-2 py-1.5 text-red-500 bg-red-100 rounded-md",
                                                        children: "KES $9, 543, 268"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                className: "mt-11",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        placeholder: "Amout",
                                                        className: "w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        placeholder: "Date",
                                                        type: "date",
                                                        className: "block w-full px-3 py-3 mt-3 text-sm text-lg leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mt-6",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                            placeholder: "Description",
                                                            className: "w-full h-24 py-3 pl-3 overflow-y-auto placeholder-gray-500 border border-gray-200 rounded resize-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 focus:outline-none"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                "aria-label": "add user",
                                                role: "button",
                                                className: "w-full px-6 py-3 text-sm text-white bg-indigo-700 rounded shadow focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 focus:outline-none hover:bg-opacity-80",
                                                children: "Transfer"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    }));
}
/* harmony default export */ const clients_Transfer = (TransferModel);

// EXTERNAL MODULE: ./components/utils/Transition.js
var Transition = __webpack_require__(8894);
;// CONCATENATED MODULE: ./components/clients/ManageAccount.js









function ManageAccount({ open , setOpen  }) {
    const { 0: Deposit , 1: setDeposit  } = (0,external_react_.useState)(false);
    const { 0: Withdraw , 1: setWithdraw  } = (0,external_react_.useState)(false);
    const { 0: Transfer , 1: setTransfer  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "popup",
                className: `z-50 fixed w-full flex justify-center inset-0  overflow-scroll ${open ? "flex" : "hidden"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `absolute inset-0 bg-gray-400 text-white bg-opacity-100 z-0
            transition-opacity duration-200 ${open ? " opacity-90" : "opacity-0 pointer-events-none"}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Transition/* default */.Z, {
                        className: "fixed inset-0 z-50 flex items-start justify-center px-4 mb-4 overflow-hidden transform top-20 sm:px-6",
                        show: open,
                        enter: "transition ease-in-out duration-200",
                        enterStart: "opacity-0 translate-y-4",
                        enterEnd: "opacity-100 translate-y-0",
                        leave: "transition ease-in-out duration-200",
                        leaveStart: "opacity-100 translate-y-0",
                        leaveEnd: "opacity-0 translate-y-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center justify-center w-full h-full overflow-scroll",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fixed justify-center max-h-full overflow-y-auto bg-white rounded-md shadow dark:bg-gray-800 h-max md:w-max",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "sticky top-0 flex items-center justify-between px-2 bg-gray-100 dark:bg-gray-600 rounded-tl-md rounded-tr-md md:px-4 md:py-4 py-7",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-base font-semibold dark:text-white",
                                                children: "Manage Account"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none",
                                                onClick: ()=>setOpen(false)
                                                ,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/add_user-svg1.svg",
                                                    alt: "icon"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-wrap items-center justify-center px-10 py-2 mt-5 space-x-5 md:justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hidden px-5 py-3 space-y-5 bg-white shadow max-w- md:inline-block dark:bg-gray-800",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex items-center justify-between pb-5",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: "flex items-center space-x-3",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                        src: avatar/* default */.Z,
                                                                        alt: "",
                                                                        width: 50,
                                                                        height: 50
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-gray-600 text-md dark:text-gray-300",
                                                                        children: "Abdishakuur ally"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                className: "px-2 py-1 bg-gray-100 rounded-md",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.PencilAltIcon, {
                                                                    className: "w-6 h-6 text-blue-600"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: "flex justify-between text-sm text-gray-600 dark:text-gray-400",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Phone: "
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "$839, 9392"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: "flex justify-between text-sm text-left text-gray-600 dark:text-gray-400",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Id No: "
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "7292092"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: "flex justify-between text-sm text-left text-gray-600 dark:text-gray-400",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Issued: "
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "9/2/2021"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                        className: "mt-5 border-b border-gray-100"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Current Money"
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                className: "px-5 py-1.5 text-green-600 bg-green-100 rounded-md",
                                                                children: "USD $9, 543, 268"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                className: "px-5 py-1.5 ml-10 text-red-500 bg-red-100 rounded-md",
                                                                children: "KES $9, 543, 268"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "grid grid-cols-2 gap-4 md:flex md:flex-col ",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        type: "button",
                                                        className: "px-5 py-3 mb-2 mr-2 text-sm font-medium text-center text-gray-200 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 w-36",
                                                        onClick: ()=>setDeposit(true)
                                                        ,
                                                        children: "Deposit(IN)"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        type: "button",
                                                        className: "px-5 py-3 mb-2 mr-2 text-sm font-medium text-center text-gray-200 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 w-36",
                                                        onClick: ()=>setWithdraw(true)
                                                        ,
                                                        children: "Widthdraw(Out)"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        type: "button",
                                                        className: "px-5 py-3 mb-2 mr-2 text-sm font-medium text-center text-gray-200 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 w-36",
                                                        onClick: ()=>setTransfer(true)
                                                        ,
                                                        children: "Transfer (OUT)"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        type: "button",
                                                        className: "px-5 py-3 mb-2 mr-2 text-sm font-medium text-center text-gray-200 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 w-36",
                                                        children: "Exchange"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(clients_Deposit, {
                open: Deposit,
                setOpen: setDeposit
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(clients_Withdraw, {
                open: Withdraw,
                setOpen: setWithdraw
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(clients_Transfer, {
                open: Transfer,
                setOpen: setTransfer
            })
        ]
    }));
}
/* harmony default export */ const clients_ManageAccount = (ManageAccount);

// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(1143);
// EXTERNAL MODULE: external "react-to-print"
var external_react_to_print_ = __webpack_require__(53);
var external_react_to_print_default = /*#__PURE__*/__webpack_require__.n(external_react_to_print_);
// EXTERNAL MODULE: ./components/cards/Transactions.js
var Transactions = __webpack_require__(4801);
// EXTERNAL MODULE: external "react-minimal-pie-chart"
var external_react_minimal_pie_chart_ = __webpack_require__(9945);
;// CONCATENATED MODULE: ./components/transactions.js/ViewModel.js







function ViewModel({ open , setOpen  }) {
    // payment information json data
    const paymentInfo = [
        {
            name: "Payment Method",
            value: "   MasterCard 404"
        },
        {
            name: "Invoice Date",
            value: "   12/12/2020"
        },
        {
            name: "Due Date",
            value: "   12/12/2020"
        },
        {
            name: "Date Paid",
            value: "   12/12/2020"
        }, 
    ];
    //   contact information json data
    const contactInfo = [
        {
            name: "Name",
            value: "   John Doe",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(solid_.UserIcon, {
                className: "text-blue-600 w-7"
            })
        },
        {
            name: "Phone",
            value: "   +1 (555) 555-5555",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(solid_.PhoneMissedCallIcon, {
                className: "text-blue-600 w-7"
            })
        },
        {
            name: "Address",
            value: "  Nairobi, Kenya",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(solid_.LocationMarkerIcon, {
                className: "text-blue-600 w-7"
            })
        },
        {
            name: "Email",
            value: "abdishakuuralimohamed@gmail.com",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(solid_.MailIcon, {
                className: "text-blue-600 w-7"
            })
        }, 
    ];
    const data = [
        {
            title: "Group A",
            value: 400,
            color: "green"
        },
        {
            title: "Group C",
            value: 300,
            color: "yellow"
        },
        {
            title: "Group B",
            value: 300,
            color: "red"
        }, 
    ];
    let componentRef = (0,external_react_.useRef)(null);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            id: "popup",
            className: `z-50 fixed w-full flex justify-center inset-0  overflow-scroll ${open ? "flex" : "hidden"}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `absolute inset-0 bg-gray-400 text-white bg-opacity-100 z-0
              transition-opacity duration-200 ${open ? " opacity-90" : "opacity-0 pointer-events-none"}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Transition/* default */.Z, {
                    className: "fixed inset-0 z-50 flex items-start justify-center px-4 overflow-hidden transform sm:px-6",
                    show: open,
                    enter: "transition ease-in-out duration-200",
                    enterStart: "opacity-0 translate-y-4",
                    enterEnd: "opacity-100 translate-y-0",
                    leave: "transition ease-in-out duration-200",
                    leaveStart: "opacity-100 translate-y-0",
                    leaveEnd: "opacity-0 translate-y-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center justify-center w-full h-full overflow-scroll",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "fixed justify-center w-full h-screen max-h-full overflow-y-auto bg-white rounded-md shadow dark:bg-gray-800",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sticky top-0 flex items-center justify-between px-2 bg-gray-100 dark:bg-gray-600 rounded-tl-md rounded-tr-md md:px-4 md:py-4 py-7",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-base font-semibold dark:text-white",
                                            children: "Account History"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none",
                                            onClick: ()=>setOpen(false)
                                            ,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/add_user-svg1.svg",
                                                alt: "icon"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-2 gap-4 px-10 md:grid-cols-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "col-span-2 p-3 bg-white dark:bg-gray-800 ",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-col space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex items-center justify-between pb-5",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: "flex flex-col space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "text-xs text-gray-400",
                                                                            children: "ID Payment"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "text-xl font-bold",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "text-gray-600 dark:text-gray-300",
                                                                                children: "#00123521"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((external_react_to_print_default()), {
                                                                    trigger: ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "flex space-x-3",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                                    className: "px-2 py-1 bg-gray-100 rounded-md",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(solid_.PrinterIcon, {
                                                                                        className: "w-6 h-6 text-blue-600"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                                    className: "px-2 py-1 text-xs text-white bg-blue-500 rounded-md ",
                                                                                    children: "Download Report"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ,
                                                                    content: ()=>componentRef
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                            className: "mt-5 border-b border-gray-100"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex justify-between mt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex items-center space-x-3",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "px-5 py-5 bg-gray-400 rounded-md"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: "flex flex-col space-y-1 text-xs text-gray-600 dark:text-gray-400",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "text-xs",
                                                                            children: "Abdishakuur ally"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "@abdially"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex items-center space-x-3",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: "flex flex-col space-y-1 text-xs text-gray-600 dark:text-gray-400",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "Amount"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "text-xs ",
                                                                            children: "$839, 9392"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "px-1 py-1 rounded-md bg-[#FDBF20]",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(solid_.CurrencyDollarIcon, {
                                                                        className: "w-6 h-6 text-white"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex items-center justify-between mt-8 space-x-5",
                                                    children: paymentInfo.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: [
                                                                        " ",
                                                                        item.name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-xs text-gray-800 truncate dark:text-gray-300 w-14 md:w-max",
                                                                    children: item.value
                                                                })
                                                            ]
                                                        })
                                                    )
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex flex-wrap gap-6 mt-10 space-x-8 space-y-2 lg:mt-24",
                                                    children: contactInfo.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "flex items-center space-x-5",
                                                            children: [
                                                                item.icon,
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: "flex flex-col space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "text-xs text-gray-400",
                                                                            children: item.name
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "text-xs text-gray-800 dark:text-gray-300",
                                                                            children: item.value
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    )
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "col-span-2 space-y-5",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-span-2 p-3 mt-2 bg-white rounded-md h-max md:mt-0 dark:bg-gray-800 ",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "flex flex-col space-y-4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "bg-[#BC1EE3] rounded-xl text-white",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "p-4 space-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                className: "flex flex-col space-y-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        children: "Main Balance"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "text-xl font-bold",
                                                                                        children: "$88,455.12"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "w-16 -mt-5 ",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    enableBackground: "new 0 0 48 48",
                                                                                    viewBox: "0 0 48 48",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                            fill: "#f44336",
                                                                                            d: "M18,24c0-4.903,2.363-9.243,6-11.98C21.491,10.132,18.382,9,15,9C6.716,9,0,15.716,0,24 c0,8.284,6.716,15,15,15c3.382,0,6.491-1.133,9-3.02C20.363,33.242,18,28.903,18,24z"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                            fill: "#ff9800",
                                                                                            d: "M33,9c-3.382,0-6.491,1.132-9,3.02c3.637,2.737,6,7.077,6,11.98s-2.363,9.242-6,11.98 c2.509,1.888,5.618,3.02,9,3.02c8.284,0,15-6.716,15-15C48,15.716,41.284,9,33,9z"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                                                                                            cx: "24",
                                                                                            cy: "24",
                                                                                            fill: "#ff7300",
                                                                                            rx: "6",
                                                                                            ry: "11.98"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "flex justify-between mt-10",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                    className: "flex flex-col",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "text-sm text-gray-200",
                                                                                            children: "VALID THRU"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "text-sm",
                                                                                            children: "12/20"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                    className: "flex flex-col",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "text-sm text-gray-200",
                                                                                            children: "VALID THRU"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "text-sm",
                                                                                            children: "12/20"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "col-span-2 p-3 mt-5 bg-white rounded-md h-max md:mt-0 dark:bg-gray-800 ",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex items-center justify-between space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "Specifies"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    className: "text-xs text-gray-400",
                                                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    className: "w-32 mt-2 text-xs text-gray-500 truncate md:w-max",
                                                                                    children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem iusto possimus qui ipsam maiores deserunt ."
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "w-auto md:w-44 lg:40",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_minimal_pie_chart_.PieChart, {
                                                                        data: data,
                                                                        animate: true,
                                                                        startAngle: 180,
                                                                        lineWidth: 40,
                                                                        colors: [
                                                                            "#09BD3C",
                                                                            "#36A2EB",
                                                                            "#FFCE56"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex items-center justify-between mt-6",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "flex items-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "w-2 h-8 bg-blue-600 rounded-sm"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    className: "font-medium ",
                                                                                    children: " 4, 920"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    className: "text-xs text-gray-400",
                                                                                    children: "Propably sold"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "flex items-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "w-2 h-8 bg-green-500 rounded-sm"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    className: "font-medium ",
                                                                                    children: " $4, 920"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    className: "text-xs text-gray-400",
                                                                                    children: "income"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "flex items-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "w-2 h-8 bg-red-500 rounded-sm"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    className: "font-medium ",
                                                                                    children: " 4, 920"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    className: "text-xs text-gray-400",
                                                                                    children: "expences"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-1 gap-10 px-4 mt-14 md:grid-cols-2 lg:grid-cols-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "p-2 bg-white rounded-md dark:bg-gray-800",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "pie charts"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(solid_.DotsVerticalIcon, {
                                                            className: "w-4 cursor-pointer "
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex items-center justify-center w-auto md:w-44 lg:40",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_minimal_pie_chart_.PieChart, {
                                                        data: data,
                                                        animate: true,
                                                        startAngle: 180,
                                                        lineWidth: 40,
                                                        colors: [
                                                            "red",
                                                            "green",
                                                            "yellow"
                                                        ],
                                                        style: {
                                                            height: "200px",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            margin: "0 auto",
                                                            display: "flex"
                                                        }
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-wrap items-center justify-between gap-5",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex items-center mt-5 space-x-2 flex-nowrap",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "w-5 h-5 bg-green-500 rounded-full"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "income"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex items-center mt-5 space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "w-5 h-5 bg-green-500 rounded-full"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "income"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex items-center mt-5 space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "w-5 h-5 bg-green-500 rounded-full"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "income"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-wrap col-span-1 bg-white dark:bg-gray-800 md:col-span-1 lg:col-span-2 xl:col-span-3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-full p-2",
                                                ref: (el)=>componentRef = el
                                                ,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Transactions/* default */.Z, {})
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }));
}
/* harmony default export */ const transactions_js_ViewModel = (ViewModel);

;// CONCATENATED MODULE: ./components/clients/Actions.js

/* This example requires Tailwind CSS v2.0+ */ 



function Actions() {
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const { 0: View , 1: setView  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center space-x-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(solid_.UserAddIcon, {
                        className: "w-5 cursor-pointer",
                        onClick: ()=>setOpen(!open)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(solid_.EyeIcon, {
                        className: "w-5 cursor-pointer",
                        onClick: ()=>setView(!View)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(clients_ManageAccount, {
                id: "search-modal",
                searchId: "search",
                open: open,
                setOpen: setOpen
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(transactions_js_ViewModel, {
                open: View,
                setOpen: setView
            })
        ]
    }));
};


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


/***/ })

};
;