import { Component, signal } from '@angular/core';
import { Header } from './Components/header/header';
import { RouterOutlet } from '@angular/router';

// Add the Component in the Imports array
// Later on we will try to minimize the imports property
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    Header,
    RouterOutlet
  ]
})
export class App {
  protected readonly title = signal('angularv20');
}
