import { baseApi } from "../baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    orderByStripe: builder.mutation({
      query: (data: any) => ({
        url: "/order/create-check-sessions",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    orderByCash: builder.mutation({
      query: (data: any) => ({
        url: "/order/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useOrderByStripeMutation, useOrderByCashMutation } = orderApi;
