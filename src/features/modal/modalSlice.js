import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  activeSlideTitle: "closed",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.visible = !state.visible;
    },
    setActiveSlides: (state, action) => {
      state.activeSlideTitle = action.payload;
    },
  },
});

export const { toggleModal, setActiveSlides } = modalSlice.actions;

export default modalSlice.reducer;
