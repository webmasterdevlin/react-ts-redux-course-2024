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
        query() {
          return `/villains`;
        },
      }),
    };
  },
});

export const { useFetchVillainsQuery } = villainSlice;
