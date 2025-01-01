import { Component, Input } from '@angular/core';
import { Services } from '../../Interfaces/Services';

@Component({
  selector: 'card',
  imports: [],
  templateUrl: './card.component.html',
  styles: ``,
  standalone: true
})
export class CardComponent {

  @Input()
  service: Services = null as any;
}
