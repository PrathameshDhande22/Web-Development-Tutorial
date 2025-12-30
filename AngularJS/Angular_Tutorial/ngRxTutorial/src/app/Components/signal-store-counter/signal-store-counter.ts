import { Component, inject } from '@angular/core';
import { CounterStore } from '../../Store/SignalCounter/count-state';

@Component({
  selector: 'app-signal-store-counter',
  imports: [],
  templateUrl: './signal-store-counter.html',
  styleUrl: './signal-store-counter.css',
})
export class SignalStoreCounter {
  counterstore = inject(CounterStore)

  increment() {
    this.counterstore.increment()
  }

  decrement() {
    this.counterstore.decrement()
  }

  reset() {
    this.counterstore.reset()
  }
}
