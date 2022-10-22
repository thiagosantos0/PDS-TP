import { createSlice } from '@reduxjs/toolkit';

const initialState = { type: null, modalData: null };

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { type, modalData } = action.payload;
      state.type = type;
      state.modalData = modalData;
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
