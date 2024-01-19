// Importing necessary functions from the "@reduxjs/toolkit/query/react" library
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Creating an API using createApi from the "@reduxjs/toolkit/query/react" library
const coursesApi = createApi({
  // Reducer path for the API slice in the Redux store
  reducerPath: "coursesApi",

  // Setting up the base query using fetchBaseQuery and providing the base URL
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030" }),

  // Defining API endpoints using the builder object
  endpoints: (builder) => ({
    // Query to fetch courses
    getCourses: builder.query({
      query: () => "courses", // Endpoint URL for fetching courses
      providesTags: ["Courses"], // Tag for caching purposes
    }),

    // Mutation to add a new course
    addCourse: builder.mutation({
      query: (course) => ({
        url: "courses", // Endpoint URL for adding a course
        method: "post", // HTTP method for the request
        body: course, // Data to be sent in the request body
      }),
      invalidatesTags: ["Courses"], // Tag to invalidate when adding a new course
    }),

    // Mutation to remove a course
    removeCourse: builder.mutation({
      query: (courseCode) => ({
        url: `courses/${courseCode}`, // Endpoint URL for removing a course
        method: "delete", // HTTP method for the request
      }),
      invalidatesTags: ["Courses"], // Tag to invalidate when removing a course
    }),
  }),
});

// Exporting the created coursesApi instance
export default coursesApi;

// Extracting and exporting specific query and mutation hooks from the coursesApi
export const {
  useGetCoursesQuery,
  useAddCourseMutation,
  useRemoveCourseMutation,
} = coursesApi;
