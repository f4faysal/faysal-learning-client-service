import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const CATEGORY_URL = "/category";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create category
    createCategory: build.mutation({
      query: (paylod) => ({
        url: `${CATEGORY_URL}`,
        method: "POST",
        data: paylod,
      }),
      invalidatesTags: [tagTypes.category],
    }),
    // categorys
    categorys: build.query({
      query: () => ({
        url: `${CATEGORY_URL}`,
        method: "GET",
      }),

      providesTags: [tagTypes.category],
    }),
    // CATEGORY
    category: build.query({
      query: (id) => ({
        url: `${CATEGORY_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.category],
    }),
    // // update Admin
    // updateAdmin: build.mutation({
    //   query: (paylod) => ({
    //     url: `${CATEGORY_URL}/${paylod.id}`,
    //     method: "PATCH",
    //     data: paylod.data,
    //   }),
    //   invalidatesTags: [tagTypes.admin],
    // }),
  }),
});

export const {
  useCreateCategoryMutation,
  useCategorysQuery,
  useCategoryQuery,
} = categoryApi;
