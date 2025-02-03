
import { TRoomsResponse, TSingleRoomResponse } from '@/types/global';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:5000/api/" }),
    // baseQuery: fetchBaseQuery({ baseUrl: "https://nexus-workspace.vercel.app/api/" }),
    tagTypes: ['Slots', 'Bookings','CheckData'],
    endpoints: (builder) => ({
        getRooms: builder.query({
            query: ({ search, sortBy }) => {
                return {
                    url: '/rooms',
                    params: { search, sort: sortBy }
                };
            },
            transformResponse: (response: TRoomsResponse) => response.data,
            providesTags: ['Slots']
        }),
        getSingleRoom: builder.query({
            query: (id) => {
                return {
                    url: `/rooms/${id}`
                }
            },
            transformResponse: (response: TSingleRoomResponse) => response.data,
            providesTags: ['Slots']
        }),
        createRoom: builder.mutation({
            query: ({ roomData, token }) => {
                console.log(roomData);
                return {
                    url: '/rooms',
                    method: 'POST',
                    body: roomData,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            },
        }),
        updateRoom: builder.mutation({
            query: ({ updatedData, token, roomId }) => {
                console.log(updatedData);
                return {
                    url: `/rooms/${roomId}`,
                    method: 'PATCH',
                    body: updatedData,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            },
            invalidatesTags: ['Slots']
        }),
        deleteRoom: builder.mutation({
            query: ({ token, roomId }) => {
                return {
                    url: `/rooms/${roomId}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            },
            invalidatesTags: ['Slots']
        }),
    })
})

export const {
    useGetRoomsQuery,
    useGetSingleRoomQuery,
    useCreateRoomMutation,
    useUpdateRoomMutation,
    useDeleteRoomMutation,
    useLazyGetRoomsQuery,
    
} = baseApi