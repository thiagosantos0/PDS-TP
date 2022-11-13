import { createSlice } from '@reduxjs/toolkit';

const initialState = { type: null, meta: {}, data: {} };

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { type = null, data = {}, meta = {} } = action.payload;
      state.type = type;
      state.data = data;
      state.meta = meta;
    },
    closeModal: () => {
      return initialState;
    },
  },
});

export default modalSlice.reducer;

export const { openModal, closeModal } = modalSlice.actions;

export const selectModal = (state) => {
  return state.modal;
};
