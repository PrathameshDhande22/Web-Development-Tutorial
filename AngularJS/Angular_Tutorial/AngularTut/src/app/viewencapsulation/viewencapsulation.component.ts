import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-viewencapsulation',
  templateUrl: './viewencapsulation.component.html',
  styleUrl: './viewencapsulation.component.css',
  encapsulation: ViewEncapsulation.None // specifying the view Encapslation.
})
export class ViewencapsulationComponent {

}
