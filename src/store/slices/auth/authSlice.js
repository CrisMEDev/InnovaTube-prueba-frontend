import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'checking',
    user: {
        uid:                    null,
        firstName:              null,
        lastName:               null,
        email:                  null,
        favorites:              null
    },
    errorMessage: null,
    msg: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
            state.msg = undefined;
        },
        onAuthLogin: (state, { payload }) => {

            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
            state.msg = undefined;

        },
        onAuthRegister: (state, { payload }) => {

            state.status = 'registered';
            state.user = {};
            state.errorMessage = undefined;
            state.msg = payload.msg;

        },
        onAuthLogout: (state, { payload }) => {

            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
            state.msg = undefined;

        },
        clearErrorMessage: (state) => {

            state.errorMessage = undefined;

        },
        clearMsg: (state) => {

            state.msg = undefined;

        }
    }
});

export const {
    clearErrorMessage,
    clearMsg,
    onAuthLogin,
    onAuthLogout,
    onAuthRegister,
    onChecking
} = authSlice.actions;