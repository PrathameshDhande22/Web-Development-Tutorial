import { Component } from '@angular/core';
import { people, PeopleType } from '../../data/people';


@Component({
  selector: 'ngstyle',
  templateUrl: './ngstyle.component.html',
})
export class NgstyleComponent {
  listofPeoples: PeopleType[] = people
}
