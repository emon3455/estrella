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



    filterProduct: builder.query({
      query: ({ category, subCategory }: { category?: string; subCategory?: string | string[] }) => {
        // Ensure subCategory is always an array
        const subCategoryArray = Array.isArray(subCategory)
          ? subCategory
          : subCategory
          ? [subCategory] // Wrap single string in an array
          : []; // Default to empty array
    
        // Join the subCategory array into a string
        const subCategoryQuery = subCategoryArray.length ? subCategoryArray.join(",") : "";
    
        // Construct query params
        const queryParams = new URLSearchParams({
          ...(category && { category }),
          ...(subCategoryQuery && { subCategory: subCategoryQuery }),
        }).toString();
    
        return {
          url: `/product/filter?${queryParams}`,
          method: "GET",
        };
      },
    }),
    

    getSingleProduct: builder.query({
      query: (id:any) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSingleProductQuery, useFilterProductQuery, useAddProductMutation, useGetProductQuery, useDeleteProductMutation, useUpdateProductMutation } = adminProductSlice;
