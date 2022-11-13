import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice.js';
import modalReducer from '../features/modal/modalSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
  },
});
