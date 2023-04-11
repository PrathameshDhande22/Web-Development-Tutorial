import { createSlice } from "@reduxjs/toolkit";

// creating the slice
export const indecSlice = createSlice({
  // name should be given to every created slice
  name: "indec",
  // initial state value should be given to every created slice
  initialState: 10,
  // reducers which accept the object with the function
  reducers: {
    increment: (state) => {
      return (state += 1);
    },
    decrement: (state) => {
      return (state -= 1);
    },
    multiply: (state, action) => {
      return (state += action.payload);
    },
  },
});

export const { increment, decrement, multiply } = indecSlice.actions;
export default indecSlice.reducer;
