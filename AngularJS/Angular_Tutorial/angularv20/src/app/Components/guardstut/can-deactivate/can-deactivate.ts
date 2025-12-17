import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-can-deactivate',
  imports: [FormsModule],
  templateUrl: './can-deactivate.html'
})
export class CanDeactivateComponent {
  username = ""

  hasUnsavedChanges() {
    if (this.username.length !== 0) {
      return true;
    }
    return false
  }
}
