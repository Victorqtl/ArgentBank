import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
}

const initialState: AuthState = {
    token: null
}

const authSlice = createSlice ({
    name: 'authSlice',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
            console.log(state)
        },
        clearToken: (state) => {
            state.token = null;
        }
    }
})

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;