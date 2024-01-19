// Importing necessary functions from the "@reduxjs/toolkit/query/react" library
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Creating an API using createApi from the "@reduxjs/toolkit/query/react" library
const selectUnitsApi = createApi({
  // Reducer path for the API slice in the Redux store
  reducerPath: "selectunitsApi",

  // Setting up the base query using fetchBaseQuery and providing the base URL
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030" }),

  // Defining API endpoints using the builder object
  endpoints: (builder) => ({
    // Query to fetch select units
    getSelectUnits: builder.query({
      query: () => "selectunits", // Endpoint URL for fetching select units
      providesTags: ["SelectUnits"], // Tag for caching purposes
    }),

    // Mutation to add a new select unit
    addSelectUnit: builder.mutation({
      query: (newSelectUnits) => ({
        url: "selectunits", // Endpoint URL for adding a select unit
        method: "post", // HTTP method for the request
        body: newSelectUnits, // Data to be sent in the request body
      }),
      invalidatesTags: ["SelectUnits"], // Tag to invalidate when adding a new select unit
    }),

    // Mutation to remove a select unit
    removeSelectUnit: builder.mutation({
      query: (id) => ({
        url: `selectunits/${id}`, // Endpoint URL for removing a select unit
        method: "delete", // HTTP method for the request
      }),
      invalidatesTags: ["SelectUnits"], // Tag to invalidate when removing a select unit
    }),
  }),
});

// Exporting the created selectUnitsApi instance
export default selectUnitsApi;

// Extracting and exporting specific query and mutation hooks from the selectUnitsApi
export const {
  useGetSelectUnitsQuery,
  useAddSelectUnitMutation,
  useRemoveSelectUnitMutation,
} = selectUnitsApi;
