import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginResponse {
    body: {
        token: string;
    }
}

interface LoginRequest {
    email: string;
    password: string;
}

interface SignupRequest {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/v1' }),
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query : (credentials) => ({
                url: 'user/login',
                method: 'POST',
                body: credentials
            })
        }),
        signup: builder.mutation<void, SignupRequest>({
            query : (data) => ({
                url: 'user/signup',
                method: 'POST',
                body: data
            })
        })
    })
})

export const {
    useLoginMutation,
    useSignupMutation
} = authApi