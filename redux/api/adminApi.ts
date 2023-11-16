import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const Admin_URL = "/admin";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Admins
    admins: build.query({
      query: () => ({
        url: `${Admin_URL}`,
        method: "GET",
      }),
      transformResponse: (response, meta) => {
        return {
          admin: response,
          meta,
        };
      },

      providesTags: [tagTypes.admin],
    }),
    // Admin
    admin: build.query({
      query: (id) => ({
        url: `${Admin_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
    // update Admin
    updateAdmin: build.mutation({
      query: (paylod) => ({
        url: `${Admin_URL}/${paylod.id}`,
        method: "PATCH",
        data: paylod.data,
      }),
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const { useAdminsQuery, useAdminQuery, useUpdateAdminMutation } =
  adminApi;
