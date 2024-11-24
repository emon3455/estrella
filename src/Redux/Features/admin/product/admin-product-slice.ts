import { apiSlice } from "../../api/apiSlice";

export const adminProductSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data,
      }),
    }),

    getProduct: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
    }),


    deleteProduct: builder.mutation({
      query: (id: any) => {
        return {
          url: `/product/delete/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductQuery,
  useDeleteProductMutation
} = adminProductSlice;
