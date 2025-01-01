import { Component, effect, Input, signal, WritableSignal } from '@angular/core';
import { count } from 'console';

@Component({
  selector: 'app-signal-child',
  templateUrl: './signal-child.component.html',
  styles: ``,
})
export class SignalChildComponent {
  @Input()
  counts: WritableSignal<number> = signal(0);

  // rendering the some effects based on the changes of the value
  constructor() {
    this.messages.push('Intialized with Number ', this.counts().toString());
    effect(() => {
      console.log('The value has been changed to ');
    });
  }

  messages: string[] = [];
}
