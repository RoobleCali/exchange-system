import { Rootapi } from "..";

const Clients = Rootapi.injectEndpoints({
  endpoints: (builder) => ({
    GetClients: builder.query({
      query: () => "/bank/clients/all",
      invalidatesTags: ["Clients"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetClientsQuery } = Clients;
