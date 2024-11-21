import { apiSlice } from "../api/apiSlice";

export const registrationSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    register: builder.mutation({
      query: (data) => ({
        url: "/user/signup",
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
    }),

    getUser: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),

    updateUserRole: builder.mutation({
      query: (data) => ({
        url: `/user/updateRole/${data.id}`,
        method: "PATCH",
        body: data.info,
      }),
    }),

  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useUpdateUserRoleMutation,
  useGetUserQuery,
} = registrationSlice;
