import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authSlice";
import categorySlice from "./Slice/categorySlice";
import mobileSlice from "./Slice/mobileSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    user: authSlice,
    mobileInfo: mobileSlice,
  },
});
