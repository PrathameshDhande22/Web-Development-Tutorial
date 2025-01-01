import { Component, Input } from '@angular/core';
import { Laptop } from '../../../data/laptop';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {

  @Input("laptop")
  laptopdetails: Laptop = {} as any;
}
