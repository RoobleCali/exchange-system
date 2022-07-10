"use strict";
exports.id = 159;
exports.ids = [159];
exports.modules = {

/***/ 476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DataPicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



function DataPicker({ open , setOpen , data  }) {
    const cancelButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const HandleChange = (e)=>{
    // get the selected  date from the datepicker
    };
    const HandleSubmit = (e)=>{
        e.preventDefault();
        // filter the data based on the selected date and type of transaction
        const filteredData = data.filter((transaction)=>transaction.date === e.target.value
        );
        console.log(filteredData);
        setOpen(false);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
        show: open,
        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
            as: "div",
            className: "fixed z-10 inset-0 overflow-y-auto",
            initialFocus: cancelButtonRef,
            onClose: setOpen,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-end justify-center overflow-y-scroll min-h-screen pt-4 px-4 pb-32 text-center sm:block sm:p-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        enter: "ease-out duration-300",
                        enterfrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Overlay, {
                            className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                        "aria-hidden": "true",
                        children: "​"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        enterTo: "opacity-100 translate-y-0 sm:scale-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "inline-block max-h-[800px] sm:mt-16 h- 92 overflow-y-scroll overflow-hidden bg-white dark:bg-gray-700 rounded-lg text-left shadow-xl transform transition-all my-52 sm:align-middle sm:max-w-md w-screen p-4 ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: "Search by date"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    className: "grid mt-4 grid-cols-1 gap-x-10",
                                    onSubmit: HandleSubmit,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "date",
                                                    className: "block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300",
                                                    children: "From Date"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "date",
                                                    className: " border truncate border-gray-300 text-md text-gray-600 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-800 dark:text-white ",
                                                    onChange: HandleChange
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "date",
                                                    className: "block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300",
                                                    children: "To Date"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "date",
                                                    className: " border text-md text-gray-600 truncate border-gray-300 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-800 dark:text-white ",
                                                    onChange: HandleChange
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center justify-center space-x-10 sm:justify-between",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: " inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                                                    onClick: ()=>setOpen(false)
                                                    ,
                                                    ref: cancelButtonRef,
                                                    children: "Cancel"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "submit",
                                                    className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm ",
                                                    children: "Search"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};

});

/***/ }),

/***/ 2437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fz": () => (/* binding */ SortIcon),
/* harmony export */   "Mx": () => (/* binding */ SortUpIcon),
/* harmony export */   "Lx": () => (/* binding */ SortDownIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SortIcon({ className  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 320 512",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
        })
    }));
}
function SortUpIcon({ className  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 320 512",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
        })
    }));
}
function SortDownIcon({ className  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: className,
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 320 512",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
        })
    }));
}


/***/ }),

/***/ 3851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_4__);





function Pagination({ previousPage , nextPage , canPreviousPage , canNextPage , state , pageOptions , gotoPage , setPageSize ,  }) {
    function GlobalFilter({ preGlobalFilteredRows , globalFilter , setGlobalFilter ,  }) {
        const count = preGlobalFilteredRows.length;
        const [value1, setValue] = useState(globalFilter);
        const onChange = useAsyncDebounce((value)=>{
            setGlobalFilter(value || undefined);
        }, 100);
        const router = useRouter();
        const route = router.pathname;
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "relative",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                class: "relative w-2xl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        class: "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            class: "w-5 h-5 text-gray-500 dark:text-gray-400",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                "fill-rule": "evenodd",
                                d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                                "clip-rule": "evenodd"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        id: "voice-search",
                        class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4xl pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                        required: true,
                        placeholder: `${count} ${route === "/transactions" ? "transactions" : "invoices"}`,
                        value: value1 || "",
                        onChange: (e)=>{
                            setValue(e.target.value);
                            onChange(e.target.value);
                        }
                    })
                ]
            })
        }));
    }
    // filter date range in the table
    // function DateFilter({ preFilteredRows, setFilter, filter, column: { id } }) {
    //   const [min, setMin] = useState(filter.min);
    //   const [max, setMax] = useState(filter.max);
    //   const onMinChange = (e) => {
    //     setMin(e.target.value);
    //   };
    //   const onMaxChange = (e) => {
    //     setMax(e.target.value);
    //   };
    //   const onSubmit = () => {
    //     setFilter((rows) => {
    //       return rows.filter((row) => {
    //         const rowValue = row.values[id];
    //         return rowValue >= min && rowValue <= max;
    //       });
    //     });
    //   };
    //   return (
    //     <div className="flex items-center">
    //       <div className="flex-1">
    //         <input
    //           type="date"
    //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
    //          focus:border-blue-500 block w-4xl pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
    //          dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           required
    //           value={min}
    //           onChange={onMinChange}
    //         />
    //       </div>
    //       <div className="flex-1">
    //         <input
    //           type="date"
    //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
    //           focus:border-blue-500 block w-4xl pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
    //           dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           required
    //           value={max}
    //           onChange={onMaxChange}
    //         />
    //       </div>
    //       <div className="flex-1">
    //         <button
    //           className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
    //           type="button"
    //           onClick={onSubmit}
    //         >
    //           Filter
    //         </button>
    //       </div>
    //     </div>
    //   );
    // }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between flex-1 p-2 sm:hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>previousPage()
                        ,
                        disabled: !canPreviousPage,
                        children: "Previous"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>nextPage()
                        ,
                        disabled: !canNextPage,
                        children: "Next"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "justify-between flex-1 hidden px-2 sm:flex sm:items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-baseline w-96 gap-x-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "text-sm text-gray-800 dark:text-gray-300",
                                children: [
                                    "Page ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-medium",
                                        children: state.pageIndex + 1
                                    }),
                                    " of",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "ml-2 font-medium",
                                        children: pageOptions.length
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                    className: "flex items-center px-2 py-2 space-x-2 text-sm text-gray-600 border-none rounded-sm outline-none cursor-pointer focus:border-none dark:bg-gray-800 innline-flex",
                                    value: state.pageSize,
                                    onChange: (e)=>{
                                        setPageSize(Number(e.target.value));
                                    },
                                    children: [
                                        50,
                                        100,
                                        150
                                    ].map((pageSize)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                            value: pageSize,
                                            children: [
                                                "Show ",
                                                pageSize
                                            ]
                                        }, pageSize)
                                    )
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>previousPage()
                                    ,
                                    disabled: !canPreviousPage,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.ChevronLeftIcon, {
                                        className: "text-gray-400 w-7 h-7"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex max-w-md overflow-x-scroll",
                                children: pageOptions.map((page, i)=>{
                                    const isActive = i === state.pageIndex;
                                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "max-w-2xl py-6 mx-auto",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: `rounded-l-xl  px-3 py-2 mx-2 text-base font-bold leading-tight 
                       transition duration-150 ease-in-out rounded 
                       shadow cursor-pointer text-gray-200 hover:text-white hover:bg-indigo-600  sm:mx-4 focus:outline-none ${isActive ? "bg-indigo-600 text-white" : "text-indigo-700"}`,
                                            onClick: ()=>gotoPage(i)
                                            ,
                                            disabled: i === state.pageIndex,
                                            children: page
                                        }, page)
                                    }, i));
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "pl-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>nextPage()
                                    ,
                                    disabled: !canNextPage,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.ChevronRightIcon, {
                                        className: "text-gray-400 w-7 h-7"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ }),

/***/ 6217:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2154);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2437);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_DataPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(476);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3851);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_models_DataPicker__WEBPACK_IMPORTED_MODULE_6__]);
_models_DataPicker__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];











function GlobalFilter({ preGlobalFilteredRows , globalFilter , setGlobalFilter ,  }) {
    const count = preGlobalFilteredRows.length;
    const { 0: value1 , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(globalFilter);
    const onChange = (0,react_table__WEBPACK_IMPORTED_MODULE_2__.useAsyncDebounce)((value)=>{
        setGlobalFilter(value || undefined);
    }, 100);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const route = router.pathname;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative w-1/2",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative w-60",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        className: "w-5 h-5 text-gray-500 dark:text-gray-400",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fillRule: "evenodd",
                            d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                            clipRule: "evenodd"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    id: "voice-search",
                    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4xl px-24 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                    required: true,
                    placeholder: `${count} ${route === "/transactions" ? "transactions" : "invoices"}`,
                    value: value1 || "",
                    onChange: (e)=>{
                        setValue(e.target.value);
                        onChange(e.target.value);
                    }
                })
            ]
        })
    }));
}
// filter date range in the table
// function DateFilter({ preFilteredRows, setFilter, filter, column: { id } }) {
//   const [min, setMin] = useState(filter.min);
//   const [max, setMax] = useState(filter.max);
//   const onMinChange = (e) => {
//     setMin(e.target.value);
//   };
//   const onMaxChange = (e) => {
//     setMax(e.target.value);
//   };
//   const onSubmit = () => {
//     setFilter((rows) => {
//       return rows.filter((row) => {
//         const rowValue = row.values[id];
//         return rowValue >= min && rowValue <= max;
//       });
//     });
//   };
//   return (
//     <div className="flex items-center">
//       <div className="flex-1">
//         <input
//           type="date"
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
//          focus:border-blue-500 block w-4xl pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
//          dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           required
//           value={min}
//           onChange={onMinChange}
//         />
//       </div>
//       <div className="flex-1">
//         <input
//           type="date"
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
//           focus:border-blue-500 block w-4xl pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
//           dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           required
//           value={max}
//           onChange={onMaxChange}
//         />
//       </div>
//       <div className="flex-1">
//         <button
//           className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
//           type="button"
//           onClick={onSubmit}
//         >
//           Filter
//         </button>
//       </div>
//     </div>
//   );
// }
function Table({ columns , data  }) {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let componentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const route = router.pathname;
    const { getTableProps , getTableBodyProps , headerGroups , prepareRow , page , canPreviousPage , canNextPage , pageOptions , gotoPage , nextPage , previousPage , setPageSize , state , preGlobalFilteredRows , setGlobalFilter ,  } = (0,react_table__WEBPACK_IMPORTED_MODULE_2__.useTable)({
        columns,
        data
    }, react_table__WEBPACK_IMPORTED_MODULE_2__.useFilters, react_table__WEBPACK_IMPORTED_MODULE_2__.useGlobalFilter, react_table__WEBPACK_IMPORTED_MODULE_2__.useSortBy, react_table__WEBPACK_IMPORTED_MODULE_2__.usePagination // new
    );
    // Render the UI for your table
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-2 mx-auto space-y-10 shadow-xl min- max-w-7xl md:p-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    route === "/transactions" || route === "/clients" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between w-full space-x-10",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-center space-x-5 sm:justify-between sm:space-x-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalFilter, {
                                        preGlobalFilteredRows: preGlobalFilteredRows,
                                        globalFilter: state.globalFilter,
                                        setGlobalFilter: setGlobalFilter
                                    }),
                                    headerGroups.map((headerGroup)=>headerGroup.headers.map((column)=>column.Filter ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        htmlFor: column.id,
                                                        children: [
                                                            column.render("Header"),
                                                            ":",
                                                            " "
                                                        ]
                                                    }),
                                                    column.render("Filter")
                                                ]
                                            }, column.id) : null
                                        )
                                    ),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "items-center px-2 py-1 space-x-2 bg-white cursor-pointer ml-14 dark:bg-slate-600 sm:flex innline-flex",
                                        onClick: ()=>setOpen(!open)
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.AdjustmentsIcon, {
                                            className: "w-5 h-6 text-gray-500 rotate-90 bg-white dark:text-gray-200 dark:bg-slate-600"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-center space-x-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_to_print__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    trigger: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center max-w-md px-2 py-2 space-x-2 text-xs text-center text-white bg-blue-700 rounded-md cursor-pointer w-max innline-flex",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.CloudDownloadIcon, {
                                                    className: "w-4 h-4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "truncate ",
                                                    children: "Print "
                                                })
                                            ]
                                        })
                                    ,
                                    content: ()=>componentRef
                                })
                            })
                        ]
                    }),
                    route === "/invoices" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between w-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center max-w-md py-2 space-x-2 text-xs text-white bg-blue-700 rounded-md w-max innline-flex md:px-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.CloudDownloadIcon, {
                                        className: "w-4 h-4"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "truncate w-14 sm:w-max",
                                        children: "download PDF "
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-1 sm:space-x-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalFilter, {
                                        preGlobalFilteredRows: preGlobalFilteredRows,
                                        globalFilter: state.globalFilter,
                                        setGlobalFilter: setGlobalFilter
                                    }),
                                    headerGroups.map((headerGroup)=>headerGroup.headers.map((column)=>column.Filter ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        htmlFor: column.id,
                                                        children: [
                                                            column.render("Header"),
                                                            ":",
                                                            " "
                                                        ]
                                                    }),
                                                    column.render("Filter")
                                                ]
                                            }, column.id) : null
                                        )
                                    ),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        className: "items-center hidden py-2 space-x-2 text-xs bg-white border-none rounded-sm outline-none cursor-pointer sm:inline-block focus:border-none dark:bg-gray-800 md:px-2 innline-flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "",
                                                children: "Pending"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "",
                                                children: "All"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "",
                                                children: "Completed"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "",
                                                children: "Cancelled"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_models_DataPicker__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                open: open,
                setOpen: setOpen,
                data: data
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full border-b divide-y divide-gray-200",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    ...getTableProps(),
                    className: "inline-block w-full overflow-hidden overflow-x-scroll border-gray-200 dark:bg-gray-800 sm:rounded-lg dark:text-gray-300",
                    ref: (el)=>componentRef = el
                    ,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            children: headerGroups.map((headerGroup)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
                                    ...headerGroup.getHeaderGroupProps(),
                                    key: headerGroup.id,
                                    children: headerGroup.headers.map((column)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            className: "w-full px-5 py-3 m-auto text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-200 group dark:bg-gray-600 p-auto dark:text-gray-600",
                                            ...column.getHeaderProps(column.getSortByToggleProps()),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between w-full items-cente dark:text-gray-300",
                                                children: [
                                                    column.render("Header"),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: column.isSorted ? column.isSortedDesc ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Icons__WEBPACK_IMPORTED_MODULE_4__/* .SortDownIcon */ .Lx, {
                                                            className: "w-4 h-4 text-gray-400"
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Icons__WEBPACK_IMPORTED_MODULE_4__/* .SortUpIcon */ .Mx, {
                                                            className: "w-4 h-4 text-gray-400"
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Icons__WEBPACK_IMPORTED_MODULE_4__/* .SortIcon */ .fz, {
                                                            className: "w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    )
                                })
                            )
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            ...getTableBodyProps(),
                            className: "w-full h-full divide-y divide-gray-200 ",
                            children: page.length > 0 ? page.map((row, i1)=>{
                                // new
                                prepareRow(row);
                                return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
                                    ...row.getRowProps(),
                                    key: i1,
                                    children: row.cells.map((cell, i)=>{
                                        return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
                                            ...cell.getCellProps(),
                                            className: "px-5 py-4 text-gray-500 dark:text-gray-300 w-max whitespace-nowrap",
                                            role: "cell",
                                            key: i,
                                            children: cell.column.Cell.name === "defaultRenderer" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: cell.render("Cell")
                                            }) : cell.render("Cell")
                                        }));
                                    })
                                }));
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                className: "mt-24",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    colSpan: columns.length,
                                    className: "mt-24 text-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-24 text-xl font-medium text-gray-500 dark:text-gray-300",
                                        children: "No Data Found"
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Pagination__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                previousPage: previousPage,
                nextPage: nextPage,
                canPreviousPage: canPreviousPage,
                canNextPage: canNextPage,
                pageOptions: pageOptions,
                state: state,
                gotoPage: gotoPage,
                setPageSize: setPageSize
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

});

/***/ })

};
;