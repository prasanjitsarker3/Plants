import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: (args: any) => ({
        url: "/category",
        method: "GET",
        params: args,
      }),
      providesTags: ["category"],
    }),
  }),
});

export const { useGetCategoryQuery } = userApi;
