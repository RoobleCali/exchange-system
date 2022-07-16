import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next";
import { REHYDRATE } from "redux-persist";

export const taskApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tick-account.herokuapp.com/api",
    refetchOnFocus: true,
    prepareHeaders: (headers) => {
      const token = getCookie("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["Users", "Roles", "/tasks"],
  endpoints: (builder) => ({
    Users: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    // with websocket
    async onCacheEntryAdded(
      arg,
      { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
    ) {
      // create a websocket connection when the cache subscription starts
      const ws = new WebSocket("ws://localhost:8080");
      try {
        // wait for the initial query to resolve before proceeding
        await cacheDataLoaded;

        // when data is received from the socket connection to the server,
        // if it is a message and for the appropriate channel,
        // update our query result with the received message
        const listener = (event) => {
          const data = JSON.parse(event.data);
          if (!isMessage(data) || data.channel !== arg) return;

          updateCachedData((draft) => {
            draft.push(data);
          });
        };

        ws.addEventListener("message", listener);
      } catch {
        // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
        // in which case `cacheDataLoaded` will throw
      }
      // cacheEntryRemoved will resolve when the cache subscription is no longer active
      await cacheEntryRemoved;
      // perform cleanup steps once the `cacheEntryRemoved` promise resolves
      ws.close();
    },
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
