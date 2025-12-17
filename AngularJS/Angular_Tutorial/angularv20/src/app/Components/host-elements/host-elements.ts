import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-host-elements',
  imports: [],
  templateUrl: './host-elements.html',
  host: {
    'role': 'dialog',
    'class': "bg-green-100",
    '[attr.aria.valuemin]': 'ariavaluemin',
    '(click)': 'showAlertBox($event)'
  }
})
export class HostElements {
  ariavaluemin = 12

  @HostBinding("attr.aria.valuemax")
  ariavaluemax = 10

  // we have binded the element with some events
  showAlertBox(ev: MouseEvent) {
    alert("You clicked" + ev.clientX + "=X, Y=" + ev.clientY)
  }

  // Host listener using decorator
  // @HostListener("mouseenter", ["$event"])
  // keyUp(ev: MouseEvent) {
  //   alert("You pressed Key=" + ev.clientX)
  // }
}
