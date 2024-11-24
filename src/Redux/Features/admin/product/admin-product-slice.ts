import { apiSlice } from "../../api/apiSlice";

export const adminProductSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getProduct: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
    }),

    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product/add",
        method: "POST",
        body: data,
      }),
    }),

    updateProduct: builder.mutation({
      query: (productData :any) => ({
        url: `/product/update/${productData?.id}`,
        method: "PUT",
        body: productData,
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

    filterProduct: builder.mutation({
      query: (data) => ({
        url: "product/filter?searchText=",
        method: "POST",
        body: data,
      }),
    }),

    getSingleProduct: builder.query({
      query: (id:any) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSingleProductQuery, useFilterProductMutation, useAddProductMutation, useGetProductQuery, useDeleteProductMutation, useUpdateProductMutation } = adminProductSlice;
