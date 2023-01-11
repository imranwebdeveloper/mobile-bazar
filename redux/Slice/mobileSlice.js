import { createSlice } from "@reduxjs/toolkit";
import { mobileState } from "../state/mobile";

const mobileSlice = createSlice({
  name: "mobile-details",
  initialState: mobileState,
  reducers: {
    handleInput: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { handleInput } = mobileSlice.actions;

export default mobileSlice.reducer;
