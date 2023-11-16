import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Login
    userSingIn: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/sing-in`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    userSingUp: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/sing-up`,
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

export const {
  useUserSingInMutation,
  useUserSingUpMutation,
  useMyProfileQuery,
} = authApi;
