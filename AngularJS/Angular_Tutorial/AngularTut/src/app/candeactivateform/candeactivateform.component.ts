import { Component } from '@angular/core';

@Component({
  selector: 'candeactivateform',
  templateUrl: './candeactivateform.component.html',
})
export class CandeactivateformComponent {
  username: string = '';
  password: string = '';

  CanExit(): boolean {
    if (this.username || this.password) {
      let confirmation: boolean = confirm('You have unsaved changes');
      if (confirmation) {
        return true;
      }
    } else {
      return true;
    }
    return false;
  }
}
