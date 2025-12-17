import { Component, computed, effect, EffectRef, Signal, signal, WritableSignal } from '@angular/core';
import { LinkedSignalTut } from '../linked-signal-tut/linked-signal-tut';

@Component({
  selector: 'app-signals-tut',
  imports: [LinkedSignalTut],
  templateUrl: './signals-tut.html',
})
export class SignalsTut {
  // Writeable signals
  count: WritableSignal<number> = signal(0);

  // Creating the Computed Signals these are redable only
  doubleCount: Signal<number> = computed<number>(() => {
    return this.count() * 2
  })

  // Effect Signal
  private effectSignal: EffectRef = effect((onCleanup) => {
    console.log(`Changes in ${this.count()} Signal ${this.doubleCount()}`)
    // Clean Up Function 
    onCleanup(() => {
      console.log(`CleanUp Function Invoked Before ${this.count()}`)
    })
  })

  destroyEffectSignal() {
    // destroy the effect
    this.effectSignal.destroy();
  }

  // Signal Set method
  btnIncrementBy(value: number) {
    this.count.set(value + 1);
  }

  // Signal Update Method
  btnUpdate() {
    this.count.update(value => value + 1)
  }
}
