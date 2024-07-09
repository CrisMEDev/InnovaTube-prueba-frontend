import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './slices/auth/authSlice';
import { videosSlice } from './slices/videos/videosSlice';
import { uiSlice } from './slices/ui/uiSlice';

export const store = configureStore({
   reducer: {
      auth:       authSlice.reducer,
      videos:     videosSlice.reducer,
      ui:         uiSlice.reducer,
   }
});