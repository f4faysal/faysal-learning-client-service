import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Login
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    // My Profile
    myProfile: build.query({
      query: () => ({
        url: `${AUTH_URL}/my-profile`,
        method: "GET",
      }),

      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useUserLoginMutation, useMyProfileQuery } = authApi;
