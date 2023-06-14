import { apiSlice } from "./apiSlice";

const USERS_URL = `${import.meta.env.VITE_BASE_URL}/api/users`;

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
        credentials: "include",
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
} = usersApiSlice;
