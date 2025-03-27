import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMeals = createAsyncThunk("meals/fetchMeals", async () => {
  const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
  console.log("API Response:", response.data); // Debugging step
  return response.data.categories; // Return the array of meals
});

const mealSlice = createSlice({
  name: "meals",
  initialState: { meals: [], status: "idle" },
  reducers: {
    toggleMealCheck: (state, action) => {
      const meal = state.meals.find((m) => m.idCategory === action.payload);
      if (meal) meal.checked = !meal.checked;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMeals.fulfilled, (state, action) => {
      console.log("Fetched Meals:", action.payload); // Debugging step
      state.meals = action.payload || []; // Ensure it is always an array
      state.status = "succeeded";
    });
  },
});

export const { toggleMealCheck } = mealSlice.actions;
export default mealSlice.reducer;
