import { createSlice } from "@reduxjs/toolkit";

// you can create as many as you want to create the reducer
export const Name = createSlice({
  name: "name",
  initialState: "Default",
  reducers: {
    setName: (state, action) => {
      return (state = action.payload);
    },
    setDef: (state) => {
      return (state = "Defualt");
    },
  },
});

export default Name.reducer;
export const { setName, setDef } = Name.actions;
