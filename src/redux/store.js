import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./mealSlice";
import authReducer from "./authSlice"; // Import auth slice

export const store = configureStore({
  reducer: {
    meals: mealReducer,
    auth: authReducer, // Add auth to store
  },
});
