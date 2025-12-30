import { createAction } from '@ngrx/store';

// Create the action using the createAction method
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');