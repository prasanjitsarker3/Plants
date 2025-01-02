import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (args: any) => ({
        url: "/product",
        method: "GET",
        params: args,
      }),
      providesTags: ["product"],
    }),
    getSingleProduct: builder.query({
      query: (id: string) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    getNewProduct: builder.query({
      query: () => ({
        url: "/product/newProduct",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetSingleProductQuery,
  useGetNewProductQuery,
} = productApi;
