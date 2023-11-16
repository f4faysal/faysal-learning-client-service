import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const chapter_url = "/chapter";

export const chapterApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create chapter
    createchapter: build.mutation({
      query: (paylod) => ({
        url: `${chapter_url}`,
        method: "POST",
        data: paylod,
      }),
      invalidatesTags: [tagTypes.chapter],
    }),
    // chapters
    chapters: build.query({
      query: () => ({
        url: `${chapter_url}`,
        method: "GET",
      }),
      transformResponse: (response, meta) => {
        return {
          chapter: response,
          meta,
        };
      },

      providesTags: [tagTypes.chapter],
    }),
    // chapter
    chapter: build.query({
      query: (id) => ({
        url: `${chapter_url}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.chapter],
    }),
    // lastchapter
    lastChapter: build.query({
      query: (id) => ({
        url: `${chapter_url}/lastchapter/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.chapter],
    }),
    // chapter chapter
    updatechapter: build.mutation({
      query: (paylod) => ({
        url: `${chapter_url}/${paylod.id}`,
        method: "PATCH",
        data: paylod.data,
      }),
      invalidatesTags: [tagTypes.chapter],
    }),
    reorder: build.mutation({
      query: (paylod) => ({
        url: `${chapter_url}/reorder`,
        method: "PUT",
        data: paylod.list,
      }),
      invalidatesTags: [tagTypes.chapter],
    }),
    // delete chapter
    deletechapter: build.mutation({
      query: (id) => ({
        url: `${chapter_url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.chapter],
    }),
  }),
});

export const {
  useCreatechapterMutation,
  useChaptersQuery,
  useChapterQuery,
  useUpdatechapterMutation,
  useDeletechapterMutation,
  useLastChapterQuery,
  useReorderMutation,
} = chapterApi;
