import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const Property_URL = "/home-info";

export const propertyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // homeOwners
    propertys: build.query({
      query: ({}) => ({
        url: `${Property_URL}`,
        method: "GET",
      }),
      transformResponse: (response, meta) => {
        return {
          property: response,
          meta,
        };
      },

      providesTags: [tagTypes.homeOwners],
    }),
    // homeOwner
    homeOwner: build.query({
      query: (id) => ({
        url: `${Property_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.homeOwners],
    }),
    // update homeOwners
    updatehomeOwner: build.mutation({
      query: (paylod) => ({
        url: `${Property_URL}/${paylod.id}`,
        method: "PATCH",
        data: paylod.data,
      }),
      invalidatesTags: [tagTypes.homeOwners],
    }),
  }),
});

export const { usePropertysQuery } = propertyApi;
