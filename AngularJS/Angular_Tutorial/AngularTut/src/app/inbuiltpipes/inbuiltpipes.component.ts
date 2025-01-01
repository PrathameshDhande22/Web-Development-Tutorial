import { Component } from '@angular/core';

@Component({
  selector: 'inbuiltpipes',
  templateUrl: './inbuiltpipes.component.html',
  styles: ``,
})
export class InbuiltpipesComponent {
  username: string = 'Prathamesh';
  dateofbirth: Date = new Date(2003, 4, 22);
  percentage: number = 0.67004;
  money: number = 1200;
}
