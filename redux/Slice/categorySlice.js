import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  top: [],
  toggle: false,
};

export const categorySlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.value = action.payload.category;
      state.top = action.payload.category.slice(0, 14);
    },
    toggle: (state) => {
      if (state.toggle) {
        state.top = state.value.slice(0, 14);
      } else {
        state.top = state.value;
        state.toggle = !state.toggle;
      }
    },
  },
});

export const { setCategory, toggle } = categorySlice.actions;

export default categorySlice.reducer;
