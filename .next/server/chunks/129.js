"use strict";
exports.id = 129;
exports.ids = [129];
exports.modules = {

/***/ 4129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qp": () => (/* binding */ taskApi),
/* harmony export */   "xY": () => (/* binding */ useUsersQuery),
/* harmony export */   "Vx": () => (/* binding */ useAddUserMutation),
/* harmony export */   "Ym": () => (/* binding */ useGetRolesQuery),
/* harmony export */   "wQ": () => (/* binding */ useGetClientsQuery),
/* harmony export */   "$h": () => (/* binding */ useChangePasswordMutation)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4161);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);



const taskApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "tasksApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "https://tick-account.herokuapp.com/api",
        refetchOnFocus: true,
        prepareHeaders: (headers)=>{
            const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)("token");
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),
    tagTypes: [
        "Users",
        "Roles",
        "/tasks"
    ],
    endpoints: (builder)=>({
            Users: builder.query({
                query: ()=>"/users"
                ,
                providesTags: [
                    "Users"
                ]
            }),
            // with websocket
            async onCacheEntryAdded (arg, { updateCachedData , cacheDataLoaded , cacheEntryRemoved  }) {
                // create a websocket connection when the cache subscription starts
                const ws = new WebSocket("ws://localhost:8080");
                try {
                    // wait for the initial query to resolve before proceeding
                    await cacheDataLoaded;
                    // when data is received from the socket connection to the server,
                    // if it is a message and for the appropriate channel,
                    // update our query result with the received message
                    const listener = (event)=>{
                        const data = JSON.parse(event.data);
                        if (!isMessage(data) || data.channel !== arg) return;
                        updateCachedData((draft)=>{
                            draft.push(data);
                        });
                    };
                    ws.addEventListener("message", listener);
                } catch  {
                // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
                // in which case `cacheDataLoaded` will throw
                }
                // cacheEntryRemoved will resolve when the cache subscription is no longer active
                await cacheEntryRemoved;
                // perform cleanup steps once the `cacheEntryRemoved` promise resolves
                ws.close();
            },
            addUser: builder.mutation({
                query: (user)=>({
                        url: "/users",
                        method: "POST",
                        body: user,
                        invalidatesTags: [
                            "Users"
                        ]
                    })
            }),
            // role
            GetRoles: builder.query({
                query: ()=>"/users/roles"
                ,
                invalidatesTags: [
                    "Users"
                ]
            }),
            // clients
            GetClients: builder.query({
                query: ()=>"/bank/clients/all"
                ,
                invalidatesTags: [
                    "Clients"
                ]
            }),
            // change password
            ChangePassword: builder.mutation({
                query: (user)=>({
                        url: "/auth/change-pass",
                        method: "POST",
                        body: user,
                        invalidatesTags: [
                            "Users"
                        ]
                    })
            })
        })
});
const { useUsersQuery , useAddUserMutation , useGetRolesQuery , useGetClientsQuery , useChangePasswordMutation ,  } = taskApi;


/***/ })

};
;