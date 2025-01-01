import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PeopleType } from '../../../data/people';
import { ChildcomponentComponent } from '../childcomponent/childcomponent.component';

@Component({
  selector: 'childdetail',
  templateUrl: './childdetail.component.html',
})
export class ChilddetailComponent {
  // getting the component pased through the viewchild
  @Input()
  selectedComp: ChildcomponentComponent = null as any;

  people: PeopleType = undefined as any;

  // afterward learning in details on lifehook cycle of angular
  ngOnInit() {
    this.people = this.selectedComp.selectedPeople
  }

  reset() {
    this.selectedComp.selectedPeople = null as any;
  }
}
