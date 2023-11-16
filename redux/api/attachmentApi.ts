import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const attachment_url = "/attachment";

export const attachmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create attachment
    createattachment: build.mutation({
      query: (paylod) => ({
        url: `${attachment_url}`,
        method: "POST",
        data: paylod,
      }),
      invalidatesTags: [tagTypes.attachment],
    }),
    // attachments
    attachments: build.query({
      query: () => ({
        url: `${attachment_url}`,
        method: "GET",
      }),
      transformResponse: (response, meta) => {
        return {
          attachment: response,
          meta,
        };
      },

      providesTags: [tagTypes.attachment],
    }),
    // attachment
    attachment: build.query({
      query: (id) => ({
        url: `${attachment_url}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.attachment],
    }),
    // attachment attachment
    updateattachment: build.mutation({
      query: (paylod) => ({
        url: `${attachment_url}/${paylod.id}`,
        method: "PATCH",
        data: paylod.data,
      }),
      invalidatesTags: [tagTypes.attachment],
    }),
    // delete attachment
    deleteattachment: build.mutation({
      query: (id) => ({
        url: `${attachment_url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.attachment],
    }),
  }),
});

export const {
  useCreateattachmentMutation,
  useAttachmentsQuery,
  useAttachmentQuery,
  useUpdateattachmentMutation,
  useDeleteattachmentMutation,
} = attachmentApi;
