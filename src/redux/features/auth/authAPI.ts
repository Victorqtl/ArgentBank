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
        })
    })
})

export const {
    useLoginMutation,
} = authApi