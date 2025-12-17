import { Component } from '@angular/core';
import { ChildcomponentOutput } from "../childcomponent-output/childcomponent-output";

@Component({
  selector: 'app-parent-component-output',
  imports: [ChildcomponentOutput],
  templateUrl: './parent-component-output.html'
})
export class ParentComponentOutput {
  // Storing the emitted value in the array
  valueEmitted: string[] = []

  pushEventValues(value: string) {
    this.valueEmitted.push(value);
  }
}
