import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next";
import { REHYDRATE } from "redux-persist";

export const taskApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tick-account.herokuapp.com/api",
    prepareHeaders: (headers) => {
      const token = getCookie("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ["Users", "Roles", "/tasks"],
  endpoints: (builder) => ({
    Users: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
        invalidatesTags: ["Users"],
      }),
    }),

    // role
    GetRoles: builder.query({
      query: () => "/users/roles",
      invalidatesTags: ["Users"],
    }),

    // clients
    GetClients: builder.query({
      query: () => "/bank/clients/all",
      invalidatesTags: ["Clients"],
    }),
  }),
});

export const {
  useUsersQuery,
  useAddUserMutation,
  useGetRolesQuery,
  useGetClientsQuery,
} = taskApi;
