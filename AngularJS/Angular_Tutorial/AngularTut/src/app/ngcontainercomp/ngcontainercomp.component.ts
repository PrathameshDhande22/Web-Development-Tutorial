import { Component, viewChildren } from '@angular/core';

@Component({
  selector: 'ngcontainercomp',
  templateUrl: './ngcontainercomp.component.html',
})
export class NgcontainercompComponent {
  public toggle: boolean = false;

  ToggleTheBtn() {
    this.toggle = !this.toggle;
  }
}
