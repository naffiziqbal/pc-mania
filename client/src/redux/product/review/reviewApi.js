import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = `https://pc-mania.vercel.app/api/v1/`;

export const reviewApi = createApi({
  reducerPath: "reviews",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: (id) => `review/product/${id}`,
    }),
  }),
});

export const { useGetReviewsQuery } = reviewApi;
