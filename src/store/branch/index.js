import { Rootapi } from "..";

const BranchApi = Rootapi.injectEndpoints({
  endpoints: (builder) => ({
    Branch: builder.query({
      query: () => "/branch",
      // providesTags: ["branch"],
    }),
    addBranch: builder.mutation({
      query: (user) => ({
        url: "/branch",
        method: "POST",
        body: user,
        invalidatesTags: ["branch"],
      }),
    }),
  }),
});

export const { useAddBranchMutation, useBranchQuery } = BranchApi;
