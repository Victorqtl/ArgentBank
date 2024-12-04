import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

interface LoginResponse {
    body: {
        token: string;
    }
}

interface LoginRequest {
    email: string;
    password: string;
}

interface UserProfile {
        body : {
        id: string;
        email : string;
        firstName: string;
        lastName: string;
    }
}

interface updateUsername {
    firstName: string;
    lastName: string;
}

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        console.log("Token récupéré dans le state :", token);
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);

        }
        return headers
    },
})

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query : (credentials) => ({
                url: 'user/login',
                method: 'POST',
                body: credentials
            })
        }),
        fetchUserProfile: builder.query<UserProfile, void>({
            query: () => ({
                url: 'user/profile',
                method: 'POST'
            })
        }),
        updateUsername: builder.mutation<void, updateUsername>({
            query: (updateData) => ({
                url: 'user/profile',
                method: 'PUT',
                body: updateData,
            })
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: 'user/logout',
                method: 'POST'
            })
        })
    })
})

export const {
    useLoginMutation,
    useFetchUserProfileQuery,
    useUpdateUsernameMutation,
    useLogoutMutation
} = authApi