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
        },
        updateDisplayName: (state, action) => {
            state.value.displayName = action.payload;
        },
        updateUsername: (state, action) => {
            state.value.username = action.payload;
        },
        updatePhoneNumber: (state, action) => {
            state.value.phoneNumber = action.payload;
        },
        updateEmail: (state, action) => {
            state.value.email = action.payload;
        },
        updatePhotoURL: (state, action) => {
            state.value.photoURL = action.payload; 
        }
    },
});

export const {
    login,
    registerAccount,
    logout, 
    updateDisplayName,
    updateUsername,
    updatePhoneNumber,
    updateEmail,
    updatePhotoURL
} = userSlice.actions;
  
export default userSlice.reducer;
