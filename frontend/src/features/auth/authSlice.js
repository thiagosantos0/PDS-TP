import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', id: '', isLoggedIn: false };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { name, id } = action.payload;
      state.name = name;
      state.id = id;
      state.isLoggedIn = true;
    },
    removeCredentials: () => {
      return initialState;
    },
  },
});

export default authSlice.reducer;

export const { setCredentials, removeCredentials } = authSlice.actions;

export const selectCredentials = (state) => {
  return state.auth;
};
