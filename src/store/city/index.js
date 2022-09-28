import { Rootapi } from "..";

const cityApi = Rootapi.injectEndpoints({
  endpoints: (builder) => ({
    City: builder.query({
      query: () => "/city",
      // providesTags: ["city"],
    }),
    addCity: builder.mutation({
      query: (user) => ({
        url: "/city",
        method: "POST",
        body: user,
        invalidatesTags: ["city"],
      }),
    }),
  }),
});

export const { useAddCityMutation, useCityQuery } = cityApi;
