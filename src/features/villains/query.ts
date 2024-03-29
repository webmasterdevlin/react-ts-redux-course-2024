import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type VillainModel = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  knownAs: string;
};

export const villainSlice = createApi({
  // where to keep the data in the reducers
  reducerPath: "villain",
  // fetchBaseQuery is a built-in fetch wrapper
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders(headers) {
      headers.set("x-auth", "Bearer ...");
      return headers;
    },
  }),
  tagTypes: ["villains"],
  endpoints(builder) {
    return {
      fetchVillains: builder.query<VillainModel[], void>({
        query: () => `/villains`,
        providesTags: ["villains"],
      }),
      addVillain: builder.mutation<VillainModel, Partial<VillainModel>>({
        query: (req) => ({
          url: `/villains`,
          method: "POST",
          body: req,
          providesTags: ["villain"],
        }),
      }),
      removeVillain: builder.mutation<void, string>({
        query: (id) => ({
          url: `/villains/${id}`,
          method: "DELETE",
        }),
        /* optimistic update */
        // onQueryStarted(id, { dispatch, queryFulfilled }) {
        //   dispatch(villainSlice.util.invalidateTags(["villains"]));
        // },
        invalidatesTags: ["villains"],
      }),
    };
  },
});

// auto generated react hooks
export const {
  useFetchVillainsQuery,
  useAddVillainMutation,
  useRemoveVillainMutation,
} = villainSlice;
