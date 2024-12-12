import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/redux/store";

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

interface updateUsernameResponse {
    body: {
        firstName: string
        lastName: string
        id: string;
        email: string;
    }
}

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);

        }
        return headers
    },
})

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery,
    endpoints: (builder) => ({
        fetchUserProfile: builder.query<UserProfile, void>({
            query: () => ({
                url: 'user/profile',
                method: 'POST'
            })
        }),
        updateUsername: builder.mutation<updateUsernameResponse, updateUsername>({
            query: (updateData) => ({
                url: 'user/profile',
                method: 'PUT',
                body: updateData,
            })
        }),
    })
})

export const {
    useFetchUserProfileQuery,
    useUpdateUsernameMutation,
} = profileApi