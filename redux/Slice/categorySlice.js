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
      state.value = action.payload;
      state.top = action.payload.slice(0, 14);
    },
    toggle: (state) => {
      if (state.toggle) {
        state.top = state.value.slice(0, 14);
        state.toggle = !state.toggle;
      } else {
        state.top = state.value;
        state.toggle = !state.toggle;
      }
    },
  },
});

export const { setCategory, toggle } = categorySlice.actions;

export default categorySlice.reducer;
