import { Rootapi } from "..";

const chargeApi = Rootapi.injectEndpoints({
  endpoints: (builder) => ({
    Charge: builder.query({
      query: () => "/charge-setup",
      // providesTags: ["charge-setup"],
    }),
    addCharge: builder.mutation({
      query: (user) => ({
        url: "/charge-setup",
        method: "POST",
        body: user,
        invalidatesTags: ["charge-setup"],
      }),
    }),
  }),
});

export const { useChargeQuery, useAddChargeMutation } = chargeApi;
