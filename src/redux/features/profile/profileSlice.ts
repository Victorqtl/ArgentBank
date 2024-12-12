import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
    body: {
        firstName: string;
        lastName: string;
        id: string;
        email: string;
} | null
}

const initialState: ProfileState = {
    body: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('body') || 'null') : null
}

const profileSlice = createSlice ({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<ProfileState['body']>) => {
            state.body = action.payload
            localStorage.setItem('body', JSON.stringify(action.payload))
        },
        clearProfile: (state) => {
            state.body = null
            localStorage.removeItem('body')
        }
    }
})

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;