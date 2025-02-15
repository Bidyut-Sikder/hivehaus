import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TRoomsResponse, TSingleRoomResponse } from "../../types/global";

//VITE_API_URL=https://workspace-backend-psi.vercel.app/api

export const baseApi = createApi({
  reducerPath: "baseApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:5000/api/" }),
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://127.0.0.1:5000/api/",
  }),
  tagTypes: ["Slots", "Bookings"],
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: ({ search, sortBy }) => {
        return {
          url: "/rooms",
          params: { search, sort: sortBy },
        };
      },
      transformResponse: (response: TRoomsResponse) => response.data,
      providesTags: ["Slots"],
    }),
    getSingleRoom: builder.query({
      query: (id) => {
        return {
          url: `/rooms/${id}`,
        };
      },
      transformResponse: (response: TSingleRoomResponse) => response.data,
      providesTags: ["Slots"],
    }),
    createRoom: builder.mutation({
      query: ({ formData, token }) => {
        return {
          url: "/rooms",
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    updateRoomById: builder.mutation({
      query: ({ formData, token }) => {
        return {
          url: `/rooms/${formData.get("id")}`,
          method: "PUT",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["Slots"],
    }),
    deleteRoomById: builder.mutation({
      query: ({ token, roomId }) => {
        return {
          url: `/rooms/${roomId}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["Slots"],
    }),
  }),
});

export const {
  useGetRoomsQuery,
  useGetSingleRoomQuery,
  useCreateRoomMutation,
  useUpdateRoomByIdMutation,
  useDeleteRoomByIdMutation,
  useLazyGetRoomsQuery,
} = baseApi;
