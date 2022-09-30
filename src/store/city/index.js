import { Rootapi } from "..";

const cityApi = Rootapi.injectEndpoints({
  endpoints: (builder) => ({
    City: builder.query({
      query: () => "/city",
      // providesTags: ["city"],
    }),
    addCity: builder.mutation({
      query: (city) => ({
        url: "/city",
        method: "POST",
        body: city,
        invalidatesTags: ["city"],
      }),
    }),
    updateCity: builder.mutation({
      query: (city) => {
        console.log(city);
        const { id, ...body } = city;
        return {
          url: `/posts/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useAddCityMutation, useCityQuery } = cityApi;
