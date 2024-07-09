import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   status: 'checking',
   favorites: [],
   errorMessage: null,
   msg: null
};

export const uiSlice = createSlice({
   name: 'ui',
   initialState,
   reducers: {
      onChecking: (state) => {
         state.status = 'checking',
         state.favorites = [],
         state.errorMessage = null,
         state.msg = null
      },
      onUpdateFavorites: (state, { payload }) => {
         state.status= 'favorites-updated',
         state.favorites = payload;
         state.errorMessage = null;
         state.msg = null;
      },
      onLogout: (state) => {
         state.status = 'checking',
         state.favorites = [],
         state.errorMessage = null,
         state.msg = null
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
   onChecking,
   onUpdateFavorites,
   onLogout,
   clearErrorMessage,
   clearMsg
} = uiSlice.actions;