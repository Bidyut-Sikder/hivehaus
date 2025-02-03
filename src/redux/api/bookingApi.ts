import { baseApi } from "./baseApi";

const bookingApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    checkBookinAvilability: builder.query({
      
      query: (data) => ({
        url: '/bookings/check-availability',
        method: "GET",
        params: data,
      }),

    
      keepUnusedDataFor: 0,
      // refetchOnMountOrArgChange: true
    })
  })
});

export const { useLazyCheckBookinAvilabilityQuery } = bookingApi;
