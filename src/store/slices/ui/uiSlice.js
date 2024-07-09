import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   status: 'checking',
   favorites: [],
   searchQueryFavs: '',
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
      onSearchQueryFavs: (state, {payload}) => {
         state.searchQueryFavs = payload;
      },
      onLogout: (state) => {
         state.status = 'checking',
         state.favorites = [],
         state.errorMessage = null,
         state.msg = null
      },
      clearSearchQueryFavs: (state) => {

         state.searchQueryFavs = '';

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
   onSearchQueryFavs,
   clearSearchQueryFavs,
   clearErrorMessage,
   clearMsg
} = uiSlice.actions;