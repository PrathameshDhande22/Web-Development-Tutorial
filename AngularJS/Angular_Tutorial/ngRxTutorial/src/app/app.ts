import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./Components/header/header";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Header, RouterOutlet]
})
export class App {
  protected readonly title = signal('ngRxTutorial');
}
