import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-manager-component',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './manager-component.html',
})
export class ManagerComponent {
}
