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
     console.log(booking,token)
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
  }),
});

export const { useLazyCheckBookinAvilabilityQuery, useConfirmBookingMutation } =
  bookingApi;
