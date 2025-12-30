import { withState, signalStore, withMethods, patchState } from '@ngrx/signals';

export const InitialCount = 0;

// creating the signal Store
export const CounterStore = signalStore(
    // where to provide the service
    { providedIn: "root" },
    // creating the state
    withState({ count: InitialCount }),
    // defining the action methods
    withMethods((store) => ({
        // define the methods
        increment() {
            // updating the values of the signal
            patchState(store, (state) => ({
                count: state.count + 1
            }))
        },
        decrement() {
            patchState(store, (state) => ({
                count: state.count - 1
            }))
        },
        reset() {
            patchState(store, (state) => ({
                count: 0
            }))
        }
    }))
)