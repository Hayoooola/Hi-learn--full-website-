import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import IUserData from '../interfaces/userData';

const authApi = createApi({
    reducerPath: "authApi",
    tagTypes: ["auth"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/v1/",
    }),
    endpoints: builder => ({

        register: builder.mutation({
            query: ({ name, email, phone, password }) => ({
                url: "/auth/register",
                method: "POST",
                body: {
                    name: name,
                    username: phone,
                    email,
                    phone: phone,
                    password,
                    confirmPassword: password
                }
            }),
            invalidatesTags: ["auth"]
        }),

        login: builder.mutation({
            query: ({ username, password }) => ({
                url: "/auth/login",
                method: "POST",
                body: {
                    identifier: username,
                    password
                }
            }),
            invalidatesTags: ["auth"]
        }),

        getUserInfo: builder.query<IUserData, string | null>({
            query: (token) => ({
                url: "./auth/me",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
            providesTags: ["auth"]
        })
    })
});

export const { useRegisterMutation, useLoginMutation, useGetUserInfoQuery } = authApi;
export default authApi;