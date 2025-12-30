import { Component, inject, Signal, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../Store/Counter/counter.actions';
import { ShareCount } from "../share-count/share-count";

@Component({
  selector: 'app-counter',
  imports: [ShareCount],
  templateUrl: './counter.html'
})
export class Counter {
  // injecting the store
  private readonly store: Store<{ count: number }> = inject(Store)
  // selectors
  count: Signal<number> = this.store.selectSignal((state) => state.count)

  increment() {
    // using the dispatch method for actions
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }
}
