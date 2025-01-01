import { Component } from '@angular/core';
import { people, PeopleType } from '../../../data/people';

@Component({
  selector: 'childcomponent',
  templateUrl: './childcomponent.component.html',
})
export class ChildcomponentComponent {

  listofPeople: PeopleType[] = people;
  selectedPeople: PeopleType = null as any;
}
