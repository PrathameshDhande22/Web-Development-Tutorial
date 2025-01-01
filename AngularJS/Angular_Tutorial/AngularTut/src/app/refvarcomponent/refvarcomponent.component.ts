import { Component, ViewChild } from '@angular/core';
import { ChildcomponentComponent } from "./childcomponent/childcomponent.component"

@Component({
  selector: 'refvarcomponent',
  templateUrl: './refvarcomponent.component.html',
})
export class RefvarcomponentComponent {

  // Getting the child component reference using ViewChild to the component.
  @ViewChild(ChildcomponentComponent)
  selectedPeople: ChildcomponentComponent = null as any;
}
