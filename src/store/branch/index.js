import { Rootapi } from "..";

const BranchApi = Rootapi.injectEndpoints({
  endpoints: (builder) => ({
    Branch: builder.query({
      query: () => "/branch",
    }),
    addBranch: builder.mutation({
      query: (branch) => ({
        url: "/branch",
        method: "POST",
        body: branch,
      }),
    }),
    DeleteBranch: builder.mutation({
      query: (branch) => ({
        url: `/branch/${branch}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useAddBranchMutation, useBranchQuery, useDeleteBranchMutation } =
  BranchApi;
