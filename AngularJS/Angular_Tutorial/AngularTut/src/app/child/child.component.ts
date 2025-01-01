import { Component, Input } from '@angular/core';
import { Student } from '../../data/student';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
})
export class ChildComponent {

  // declaring an variable as an input decorator
  @Input()
  StudentDetails: Student | undefined = undefined;

  OtherStudent: any = undefined
}
