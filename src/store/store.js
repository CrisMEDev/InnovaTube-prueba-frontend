import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './slices/auth/authSlice';
// import { uiSlice } from './slices/ui/uiSlice';

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      // ui: uiSlice.reducer,
   }
});