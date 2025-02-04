import { baseApi } from "./baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    checkBookinAvilability: builder.query({
      query: (data) => ({
        url: "/bookings/check-availability",
        method: "GET",
        params: data,
      }),

      keepUnusedDataFor: 0,
      // refetchOnMountOrArgChange: true
    }),
    //confirm booking payment
    confirmBooking: builder.mutation({
      query: ({ booking, token }) => {
        console.log(booking, token);
        return {
          url: "/payments/init",
          method: "POST",
          body: booking,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },

      // refetchOnMountOrArgChange: true
    }),
    //user bookings
    getBooking: builder.query({
      query: ({ token }) => {
        return {
          url: "/bookings/user-paid",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    //admin bookings
    getAdminBooking: builder.query({
      query: ({ token }) => {
        return {
          url: "/bookings/admin-paid",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getAdminBookingByBookingId: builder.query({
      query: ({ token,id }) => {
        return {
          url: `/bookings/admin-paid-booking/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useLazyCheckBookinAvilabilityQuery,
  useConfirmBookingMutation,
  useLazyGetBookingQuery,
  useLazyGetAdminBookingQuery,
  useLazyGetAdminBookingByBookingIdQuery
} = bookingApi;
