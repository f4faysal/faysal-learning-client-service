import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const muxData_url = "/muxData";

export const muxDataApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create muxData
    createmuxData: build.mutation({
      query: (paylod) => ({
        url: `${muxData_url}`,
        method: "POST",
        data: paylod,
      }),
      invalidatesTags: [tagTypes.muxData],
    }),
    // muxDatas
    muxDatas: build.query({
      query: () => ({
        url: `${muxData_url}`,
        method: "GET",
      }),
      transformResponse: (response, meta) => {
        return {
          muxData: response,
          meta,
        };
      },

      providesTags: [tagTypes.muxData],
    }),
    // muxData
    muxData: build.query({
      query: (id) => ({
        url: `${muxData_url}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.muxData],
    }),
    // muxData muxData
    updatemuxData: build.mutation({
      query: (paylod) => ({
        url: `${muxData_url}/${paylod.id}`,
        method: "PATCH",
        data: paylod.data,
      }),
      invalidatesTags: [tagTypes.muxData],
    }),
    // delete muxData
    deletemuxData: build.mutation({
      query: (id) => ({
        url: `${muxData_url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.muxData],
    }),
  }),
});

export const {
  useCreatemuxDataMutation,
  useMuxDatasQuery,
  useMuxDataQuery,
  useUpdatemuxDataMutation,
  useDeletemuxDataMutation,
} = muxDataApi;
