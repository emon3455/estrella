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

    addProductImage: builder.mutation({
      query: (formData) => ({
        url: `product/${formData.get("id")}/images`,
        method: "PATCH",
        body: formData,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id: any) => {
        return {
          url: `/product/${id}`,
          method: "DELETE",
        };
      },
    }),

    getProduct: builder.query({
      query: () => ({
        url: "/product/filter",
        method: "GET",
      }),
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

export const { useGetSingleProductQuery, useFilterProductMutation, useAddProductMutation, useAddProductImageMutation ,useGetProductQuery, useDeleteProductMutation } = adminProductSlice;
