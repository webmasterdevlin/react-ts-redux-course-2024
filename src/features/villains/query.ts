import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "../heroes/heroTypes";

export type VillainModel = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  knownAs: string;
} & ApiResponse;

export const villainSlice = createApi({
  reducerPath: "villain",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["villains"],
  endpoints(builder) {
    return {
      fetchVillains: builder.query<VillainModel[], void>({
        providesTags: ["villains"],
        query: () => `/villains`,
      }),
      addVillain: builder.mutation<VillainModel, Partial<VillainModel>>({
        query: (req) => ({
          url: `/villains`,
          method: "POST",
          body: req,
        }),
        invalidatesTags: ["villains"],
      }),
      removeVillain: builder.mutation<void, string>({
        query: (id) => ({
          url: `/villains/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["villains"],
      }),
    };
  },
});

export const {
  useFetchVillainsQuery,
  useAddVillainMutation,
  useRemoveVillainMutation,
} = villainSlice;
