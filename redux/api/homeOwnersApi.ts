import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const HOME_OWNER_URL = "/home-owner";

export const homeOwnersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // homeOwners
    homeOwners: build.query({
      query: () => ({
        url: `${HOME_OWNER_URL}`,
        method: "GET",
      }),
      transformResponse: (response, meta) => {
        return {
          homeOwners: response,
          meta,
        };
      },

      providesTags: [tagTypes.homeOwners],
    }),
    // homeOwner
    homeOwner: build.query({
      query: (id) => ({
        url: `${HOME_OWNER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.homeOwners],
    }),
    // update homeOwners
    updatehomeOwner: build.mutation({
      query: (paylod) => ({
        url: `${HOME_OWNER_URL}/${paylod.id}`,
        method: "PATCH",
        data: paylod.data,
      }),
      invalidatesTags: [tagTypes.homeOwners],
    }),
  }),
});

export const {
  useHomeOwnersQuery,
  useHomeOwnerQuery,
  useUpdatehomeOwnerMutation,
} = homeOwnersApi;
