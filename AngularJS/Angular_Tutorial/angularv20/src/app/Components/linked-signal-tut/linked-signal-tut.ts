import { Component, linkedSignal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-linked-signal-tut',
  imports: [],
  templateUrl: './linked-signal-tut.html',
})
export class LinkedSignalTut {
  private initialValue = 1

  // Signal for Value
  progress: WritableSignal<number> = signal<number>(this.initialValue);

  // Linked signal to compute base on another signal, these signal converts the percentage to 0-1.
  percentage: WritableSignal<number> = linkedSignal<number, number>(
    {
      source: () => this.progress(),
      computation: (newnumber: number) => {
        return newnumber * 100;
      }
    }
  )

  // change the input based on another
  changeRange(value: number) {
    this.progress.set(value / 100)
  }
}