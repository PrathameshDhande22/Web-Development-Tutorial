import { Component, signal, WritableSignal } from '@angular/core';
import { Childcomponent } from '../childcomponent/childcomponent';

@Component({
  selector: 'app-parent-component',
  imports: [Childcomponent],
  templateUrl: './parent-component.html'
})
export class ParentComponent {
  value = 10;
  // Any changes to these signal will be passed too child component
  userName: WritableSignal<string> = signal<string>("")

  setUsername(value: string) {
    this.userName.set(value)
  }
}
