import { createSlice } from '@reduxjs/toolkit';

const initialState = {username: "", phoneNumber: "", email: "", photoURL: "", };

export const userSlice = createSlice({
    name: "user",
    initialState: {value: initialState},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        registerAccount: (state, action ) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialState;
        }
    },
});

export const {
    login,
    registerAccount,
    logout
} = userSlice.actions;
  
export default userSlice.reducer;
