import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   status: 'checking',
   innovaData: {
      nextPageToken:    null,
      prevPageToken:    null,
      totalResults:     null,
      resultsPerPage:   null,
      videos:           []
   },
   errorMessage:        null,
   msg:                 null
};

export const videosSlice = createSlice({
   name: 'videos',
   initialState,
   reducers: {
      onChecking: (state) => {
         state.status = 'checking';
         state.innovaData = {};
         state.errorMessage = undefined;
         state.msg = undefined;
      },
      onGetVideosBySearchQuery: (state, { payload }) => {

         state.status = 'loaded';
         state.innovaData = payload;
         state.errorMessage = undefined;
         state.msg = undefined;

      },
      onGettingError: (state, { payload }) => {
         state.status = 'error';
         state.innovaData = {
            nextPageToken:    null,
            prevPageToken:    null,
            totalResults:     null,
            resultsPerPage:   null,
            videos:           []
         };
         state.errorMessage = payload;
         state.msg = null;
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
   onGetVideosBySearchQuery,
   onChecking,
   onGettingError
} = videosSlice.actions;