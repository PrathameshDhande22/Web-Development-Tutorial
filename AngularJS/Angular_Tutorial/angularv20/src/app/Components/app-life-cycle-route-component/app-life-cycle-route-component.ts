import { Component } from '@angular/core';
import { LifeCycle } from '../life-cycle/life-cycle';

@Component({
  selector: 'app-app-life-cycle-route-component',
  imports: [LifeCycle],
  templateUrl: './app-life-cycle-route-component.html'
})
export class AppLifeCycleRouteComponent {
  valueForInput = ""
}
