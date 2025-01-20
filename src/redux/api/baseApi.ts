import { TRoomsResponse } from "@/types/global";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
 
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
  }),
});

export const {
  useGetRoomsQuery,

  useLazyGetRoomsQuery,
} = baseApi;
