import { configureStore } from "@reduxjs/toolkit";
import indecReducer from "./Reducers/index";
import NameReducer from "./Reducers/Name";

// configuring the store
export default configureStore({
  reducer: {
    number: indecReducer,
    dec: indecReducer,
    mul: indecReducer,
    name: NameReducer,
  },
});
