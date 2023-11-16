import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const RENT_USER_URL = "/rent-users";

export const rentUsersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // rentUsers
    rentUsers: build.query({
      query: () => ({
        url: `${RENT_USER_URL}`,
        method: "GET",
      }),
      transformResponse: (response, meta) => {
        return {
          rentUsers: response,
          meta,
        };
      },

      providesTags: [tagTypes.rentUsers],
    }),
    // rentUser
    rentUser: build.query({
      query: (id) => ({
        url: `${RENT_USER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.rentUsers],
    }),
    // update rent Users
    updateRentUsers: build.mutation({
      query: (paylod) => ({
        url: `${RENT_USER_URL}/${paylod.id}`,
        method: "PATCH",
        data: paylod.data,
      }),
      invalidatesTags: [tagTypes.rentUsers],
    }),
  }),
});

export const {
  useRentUsersQuery,
  useRentUserQuery,
  useUpdateRentUsersMutation,
} = rentUsersApi;
