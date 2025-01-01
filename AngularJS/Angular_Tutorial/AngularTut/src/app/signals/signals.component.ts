import { Component, effect, signal, WritableSignal } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
})
export class SignalsComponent {
  // defining the signals
  count: WritableSignal<number> = signal<number>(0);

  constructor() {
    // these method runs every time whenever the value in the signal changes or updates
    effect((count) => {
      console.log('Count has changed to => ', this.count());
    }, {});
  }

  btnCounter(no: -1 | 1) {
    // setting the value using the set method
    // this.count.set(this.count() + no);

    // updating the value of the signal
    this.count.update((prevvalue) => {
      return prevvalue + no;
    });
  }
}
