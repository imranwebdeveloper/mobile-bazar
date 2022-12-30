import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    handleUser: (state, action) => {
      if (action.payload) {
        state.user = action.payload.user;
        console.log(state.user);
      }
    },
  },
});

export const { handleUser } = authSlice.actions;

export default authSlice.reducer;
