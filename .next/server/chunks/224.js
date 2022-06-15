"use strict";
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 3224:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "t": () => (/* binding */ StatusPill)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2154);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(879);
/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9602);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models_DataPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8981);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_models_DataPicker__WEBPACK_IMPORTED_MODULE_7__]);
_models_DataPicker__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




//hero icons

//table component






// access status row data and return the status icon and color based on the status
function StatusPill({ value  }) {
    const status = value ? value.toLowerCase() : "unknown";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: `  
       ${status.startsWith("success") ? "bg-green-100 text-green-500 px-4 py-1 text-sm  w-max truncate rounded-md" : null}
        ${status.startsWith("pending") ? "bg-orange-100 text-orange-500 px-4 py-1 text-sm  rounded-md truncate" : null}
        ${status.startsWith("error") ? "   text-red-700 bg-red-100  px-7 py-1 text-sm w-32  truncate rounded-md" : null} 
    
 `,
        children: status
    });
}
// global filter component for the table header if no data found in the table then show no data found
// Define a default UI for filtering
function GlobalFilter({ preGlobalFilteredRows , globalFilter , setGlobalFilter ,  }) {
    const count = preGlobalFilteredRows.length;
    const { 0: value1 , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(globalFilter);
    const onChange = (0,react_table__WEBPACK_IMPORTED_MODULE_2__.useAsyncDebounce)((value)=>{
        setGlobalFilter(value || undefined);
    }, 100);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const route = router.pathname;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.SearchIcon, {
                    className: "w-4 text-gray-600"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "search",
                id: "default-search",
                className: "block py-2 px-10 w-full text-[12px] sm:text-sm text-gray-900 bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                placeholder: `${count} ${route === "/transactions" ? "transactions" : "invoices"}`,
                value: value1 || "",
                onChange: (e)=>{
                    setValue(e.target.value);
                    onChange(e.target.value);
                }
            })
        ]
    });
}
function Table({ columns , data  }) {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let componentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const route = router.pathname;
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps , getTableBodyProps , headerGroups , prepareRow , page , // which has only the rows for the active page
    // The rest of these things are super handy, too ;)
    canPreviousPage , canNextPage , pageOptions , pageCount , gotoPage , nextPage , previousPage , setPageSize , state , preGlobalFilteredRows , visibleColumns , setGlobalFilter ,  } = (0,react_table__WEBPACK_IMPORTED_MODULE_2__.useTable)({
        columns,
        data
    }, react_table__WEBPACK_IMPORTED_MODULE_2__.useFilters, react_table__WEBPACK_IMPORTED_MODULE_2__.useGlobalFilter, react_table__WEBPACK_IMPORTED_MODULE_2__.useSortBy, react_table__WEBPACK_IMPORTED_MODULE_2__.usePagination // new
    );
    console.log(page);
    // Render the UI for your table
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-10 max-w-7xl mx-auto shadow-xl p-2 md:p-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    route === "/invoices" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " w-max flex space-x-2 innline-flex items-center bg-blue-700 md:px-2 max-w-md text-xs py-2 rounded-md text-white",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.CloudDownloadIcon, {
                                        className: "w-4 h-4"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "w-14 sm:w-max truncate",
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " cursor-pointer bg-white dark:text-gray-700 dark:bg-gray-800 px-2 py-1 sm:flex space-x-2 innline-flex items-center ",
                                        onClick: ()=>setOpen(!open)
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.AdjustmentsIcon, {
                                            className: "w-5 h-6 text-gray-500 dark:text-gray-200 rotate-90"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        className: "cursor-pointer hidden sm:inline-block py-2 focus:border-none border-none outline-none text-xs bg-white dark:bg-gray-800 rounded-sm md:px-2 space-x-2 innline-flex items-center",
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
                    }),
                    route === "/transactions" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full space-x-10 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-center sm:justify-between sm:space-x-3 space-x-5",
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
                                        className: " cursor-pointer bg-white dark:bg-slate-600 px-2 py-1 sm:flex space-x-2 innline-flex items-center ",
                                        onClick: ()=>setOpen(!open)
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.AdjustmentsIcon, {
                                            className: "w-5 h-6 text-gray-500 dark:text-gray-200 bg-white dark:bg-slate-600 rotate-90"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-center space-x-3",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        className: "cursor-pointer hidden py-2 sm:inline-block focus:border-none border-none outline-none text-xs bg-white dark:bg-gray-800 rounded-sm px-0 space-x-2 innline-flex items-center",
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
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_to_print__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        trigger: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "cursor-pointer text-center w-max flex space-x-2 innline-flex items-center bg-blue-700 px-2 max-w-md text-xs py-2 rounded-md text-white",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.CloudDownloadIcon, {
                                                        className: "w-4 h-4"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: " truncate",
                                                        children: "Print "
                                                    })
                                                ]
                                            })
                                        ,
                                        content: ()=>componentRef
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_models_DataPicker__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                open: open,
                setOpen: setOpen,
                data: data
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full divide-y divide-gray-200 border-b",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    ...getTableProps(),
                    className: " dark:bg-gray-800 w-full pb-16 overflow-x-scroll overflow-hidden inline-block border-gray-200 sm:rounded-lg dark:text-gray-300 ",
                    ref: (el)=>componentRef = el
                    ,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            className: "",
                            children: headerGroups.map((headerGroup)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
                                    ...headerGroup.getHeaderGroupProps(),
                                    key: headerGroup.id
                                }, headerGroup.headers.map((column)=>// Add the sorting props to control sorting. For this example
                                    // we can add them into the header props
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "group px-5 w-full m-auto bg-gray-200 dark:bg-gray-600 text-gray-500 p-auto py-3 text-left text-xs font-medium dark:text-gray-600 uppercase tracking-wider",
                                        ...column.getHeaderProps(column.getSortByToggleProps()),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-cente dark:text-gray-300 w-full justify-between",
                                            children: [
                                                column.render("Header"),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: column.isSorted ? column.isSortedDesc ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Icons__WEBPACK_IMPORTED_MODULE_5__/* .SortDownIcon */ .Lx, {
                                                        className: "w-4 h-4 text-gray-400"
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Icons__WEBPACK_IMPORTED_MODULE_5__/* .SortUpIcon */ .Mx, {
                                                        className: "w-4 h-4 text-gray-400"
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Icons__WEBPACK_IMPORTED_MODULE_5__/* .SortIcon */ .fz, {
                                                        className: "w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ))
                            )
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            ...getTableBodyProps(),
                            className: " divide-y divide-gray-200 w-full",
                            children: page.length > 0 ? page.map((row, i)=>{
                                // new
                                prepareRow(row);
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    ...row.getRowProps(),
                                    children: row.cells.map((cell)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            ...cell.getCellProps(),
                                            className: "px-5 text-gray-500 dark:text-gray-300 py-4 w-max whitespace-nowrap",
                                            role: "cell",
                                            children: cell.column.Cell.name === "defaultRenderer" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-sm text-gray-500 dark:text-gray-300",
                                                children: cell.render("Cell")
                                            }) : cell.render("Cell")
                                        });
                                    })
                                });
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                className: "mt-24",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    colSpan: columns.length,
                                    className: "text-center mt-24",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-xl font-medium mt-24 text-gray-500 dark:text-gray-300",
                                        children: "No Data Found"
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1 p-2 flex justify-between sm:hidden",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                onClick: ()=>previousPage()
                                ,
                                disabled: !canPreviousPage,
                                children: "Previous"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                onClick: ()=>nextPage()
                                ,
                                disabled: !canNextPage,
                                children: "Next"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "hidden flex-1 sm:flex sm:items-center px-2 justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-x-2 items-baseline",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-sm text-gray-700",
                                        children: [
                                            "Page ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-medium",
                                                children: state.pageIndex + 1
                                            }),
                                            " of",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-medium",
                                                children: pageOptions.length
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                            className: "cursor-pointer py-2 focus:border-none border-none outline-none text-sm bg-white dark:bg-gray-800 rounded-sm px-2 flex space-x-2 innline-flex items-center",
                                            value: state.pageSize,
                                            onChange: (e)=>{
                                                setPageSize(Number(e.target.value));
                                            },
                                            children: [
                                                5,
                                                10,
                                                20
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                    className: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
                                    "aria-label": "Pagination",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_Button__WEBPACK_IMPORTED_MODULE_4__/* .PageButton */ .v, {
                                            className: "rounded-l-xl",
                                            onClick: ()=>gotoPage(0)
                                            ,
                                            disabled: !canPreviousPage,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only",
                                                    children: "First"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronDoubleLeftIcon, {
                                                    className: "h-5 w-5 text-gray-400",
                                                    "aria-hidden": "true"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_Button__WEBPACK_IMPORTED_MODULE_4__/* .PageButton */ .v, {
                                            onClick: ()=>previousPage()
                                            ,
                                            disabled: !canPreviousPage,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Previous"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronLeftIcon, {
                                                    className: "h-5 w-5 text-gray-400",
                                                    "aria-hidden": "true"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_Button__WEBPACK_IMPORTED_MODULE_4__/* .PageButton */ .v, {
                                            onClick: ()=>nextPage()
                                            ,
                                            disabled: !canNextPage,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Next"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronRightIcon, {
                                                    className: "h-5 w-5 text-gray-400",
                                                    "aria-hidden": "true"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_Button__WEBPACK_IMPORTED_MODULE_4__/* .PageButton */ .v, {
                                            className: "rounded-r-md",
                                            onClick: ()=>gotoPage(pageCount - 1)
                                            ,
                                            disabled: !canNextPage,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Last"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronDoubleRightIcon, {
                                                    className: "h-5 w-5 text-gray-400",
                                                    "aria-hidden": "true"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8981:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DataPicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
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
                        children: "\u200B"
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
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ Button),
  "v": () => (/* binding */ PageButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/shared/Utils.js
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

;// CONCATENATED MODULE: ./components/shared/Button.js



function Button({ children , className , ...rest }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: "button",
        className: classNames("relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50", className),
        ...rest,
        children: children
    });
}
function PageButton({ children , className , ...rest }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: "button",
        className: classNames("relative inline-flex items-center px-2 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50", className),
        ...rest,
        children: children
    });
}


/***/ }),

/***/ 9602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lx": () => (/* binding */ SortDownIcon),
/* harmony export */   "Mx": () => (/* binding */ SortUpIcon),
/* harmony export */   "fz": () => (/* binding */ SortIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SortIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
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
    });
}
function SortUpIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
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
    });
}
function SortDownIcon({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
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
    });
}


/***/ })

};
;