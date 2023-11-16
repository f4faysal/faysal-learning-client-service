import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const course_url = "/course";

export const courseApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create Course
    createCourse: build.mutation({
      query: (paylod) => ({
        url: `${course_url}`,
        method: "POST",
        data: paylod,
      }),
      invalidatesTags: [tagTypes.course],
    }),
    // Courses
    courses: build.query({
      query: () => ({
        url: `${course_url}`,
        method: "GET",
      }),

      providesTags: [tagTypes.course],
    }),
    // Course
    course: build.query({
      query: (id) => ({
        url: `${course_url}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.course],
    }),
    // course course
    updateCourse: build.mutation({
      query: (paylod) => ({
        url: `${course_url}/${paylod.id}`,
        method: "PATCH",
        data: paylod.data,
      }),
      invalidatesTags: [tagTypes.course],
    }),
    // delete course
    deleteCourse: build.mutation({
      query: (id) => ({
        url: `${course_url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.course],
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useCoursesQuery,
  useCourseQuery,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} = courseApi;
