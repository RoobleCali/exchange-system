import { Rootapi } from "..";

const userApi = Rootapi.injectEndpoints({
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
    ChangePassword: builder.mutation({
      query: (user) => ({
        url: "/auth/change-pass",
        method: "POST",
        body: user,
        invalidatesTags: ["Users"],
      }),
    }),
    GetRoles: builder.query({
      query: () => "/users/roles",
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetRolesQuery,
  useUsersQuery,
  useChangePasswordMutation,
} = userApi;
