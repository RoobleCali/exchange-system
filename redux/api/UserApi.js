import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next";

export const taskApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tick-account.herokuapp.com/api",
    prepareHeaders(headers) {
      return headers;
    },
  }),

  //  import endpoints from different files

  endpoints: (builder) => ({
    tasks: builder.query({
      query: () => "/users",
      method: "GET",
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/users",
        method: "POST",
        body: task,
      }),
    }),
    updateTask: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;
