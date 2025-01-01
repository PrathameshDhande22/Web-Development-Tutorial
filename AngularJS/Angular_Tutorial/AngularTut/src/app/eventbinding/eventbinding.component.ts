import { Component, ElementRef, input } from '@angular/core';

@Component({
  selector: 'eventbinding',
  templateUrl: './eventbinding.component.html',
})
export class EventbindingComponent {
  username: string = "Prathamesh"

  // Event binded function
  onUsernameChange(event: Event) {
    const inputele = event.target as HTMLInputElement;

    this.username = inputele.value;
  }
}
