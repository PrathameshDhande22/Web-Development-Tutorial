import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";

export const InitialCountState = 0;

// Create the reducer like action what will happen on recieving these actions
export const countReducer = createReducer(InitialCountState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, () => 0),
)