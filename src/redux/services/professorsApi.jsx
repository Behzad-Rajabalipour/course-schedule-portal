// Importing necessary functions from the "@reduxjs/toolkit/query/react" library
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Creating an API using createApi from the "@reduxjs/toolkit/query/react" library
const professorsApi = createApi({
  // Reducer path for the API slice in the Redux store
  reducerPath: "professorsApi",

  // Setting up the base query using fetchBaseQuery and providing the base URL
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030" }),

  // Defining API endpoints using the builder object
  endpoints: (builder) => ({
    // Query to fetch professors
    getProfessors: builder.query({
      query: () => "professors", // Endpoint URL for fetching professors
      providesTags: ["Professors"], // Tag for caching purposes
    }),

    // Mutation to add a new professor
    addProfessor: builder.mutation({
      query: (newProfessor) => ({
        url: "professors", // Endpoint URL for adding a professor
        method: "post", // HTTP method for the request
        body: { ...newProfessor }, // Data to be sent in the request body
      }),
      invalidatesTags: ["Professors"], // Tag to invalidate when adding a new professor
    }),

    // Mutation to remove a professor
    removeProfessor: builder.mutation({
      query: (professorCode) => ({
        url: `professors/${professorCode}`, // Endpoint URL for removing a professor
        method: "delete", // HTTP method for the request
      }),
      invalidatesTags: ["Professors"], // Tag to invalidate when removing a professor
    }),

    updateProfessor: builder.mutation({
      query: ({professorCode, course_list}) => ({
        url: `professors/${professorCode}`,
        method: 'PATCH',        // Patch must be writte in capital otherwise it doesn't work
        body: {course_list},    // Assuming course_list is already a JSON object
      }),
      invalidatesTags: ["Professors"],
    }),
  }),
});

// Exporting the created professorsApi instance
export default professorsApi;

// Extracting and exporting specific query and mutation hooks from the professorsApi
export const {
  useGetProfessorsQuery,
  useAddProfessorMutation,
  useRemoveProfessorMutation,
  useUpdateProfessorMutation
} = professorsApi;
