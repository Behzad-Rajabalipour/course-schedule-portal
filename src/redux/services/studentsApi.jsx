// Importing necessary functions from the "@reduxjs/toolkit/query/react" library
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Creating an API using createApi from the "@reduxjs/toolkit/query/react" library
const studentsApi = createApi({
  // Reducer path for the API slice in the Redux store
  reducerPath: "studentApi",

  // Setting up the base query using fetchBaseQuery and providing the base URL
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030" }),

  // Defining API endpoints using the builder object
  endpoints: (builder) => ({
    // Query to fetch students
    getStudents: builder.query({
      query: () => "students", // Endpoint URL for fetching students
      providesTags: ["Students"], // Tag for caching purposes
    }),

    // Mutation to add a new student
    addStudent: builder.mutation({
      query: (newStudents) => ({
        url: "students", // Endpoint URL for adding a student
        method: "post", // HTTP method for the request
        body: newStudents, // Data to be sent in the request body
      }),
      invalidatesTags: ["Students"], // Tag to invalidate when adding a new student
    }),

    // Mutation to remove a student
    removeStudent: builder.mutation({
      query: (studentCode) => ({
        url: `students/${studentCode}`, // Endpoint URL for removing a student
        method: "delete", // HTTP method for the request
      }),
      invalidatesTags: ["Students"], // Tag to invalidate when removing a student
    }),
  }),
});

// Exporting the created studentsApi instance
export default studentsApi;

// Extracting and exporting specific query and mutation hooks from the studentsApi
export const {
  useGetStudentsQuery,
  useAddStudentMutation,
  useRemoveStudentMutation,
} = studentsApi;
