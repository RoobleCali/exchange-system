"use strict";
exports.id = 129;
exports.ids = [129];
exports.modules = {

/***/ 4129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qp": () => (/* binding */ taskApi),
/* harmony export */   "Uk": () => (/* binding */ useTasksQuery)
/* harmony export */ });
/* unused harmony exports useAddTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation */
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);


const taskApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "tasksApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "https://tick-account.herokuapp.com/api",
        prepareHeaders: (headers)=>{
            const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("token");
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),
    //  import endpoints from different files
    endpoints: (builder)=>({
            tasks: builder.query({
                query: ()=>"/users"
            }),
            addTask: builder.mutation({
                query: (task)=>({
                        url: "/users",
                        method: "POST",
                        body: task
                    })
            }),
            updateTask: builder.mutation({
                query: ({ id , ...rest })=>({
                        url: `/users/${id}`,
                        method: "PUT",
                        body: rest
                    })
            }),
            deleteTask: builder.mutation({
                query: (id)=>({
                        url: `/users/${id}`,
                        method: "DELETE"
                    })
            })
        })
});
const { useTasksQuery , useAddTaskMutation , useUpdateTaskMutation , useDeleteTaskMutation ,  } = taskApi;


/***/ })

};
;