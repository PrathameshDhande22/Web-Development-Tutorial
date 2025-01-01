import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { IFilter } from '../output.component';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent {

  // taking the array of filter
  @Input()
  listoffilter: IFilter[] | undefined = undefined;

  // Output the event emitter to emit the value from the child component to the parent component
  @Output()
  selectedFiltertype: EventEmitter<string> = new EventEmitter<string>();

  selecteFilterTypeForFiltering: string = "All"

  onChangeDropDown() {
    this.selectedFiltertype.emit(this.selecteFilterTypeForFiltering)
    console.log("Calling these")
    console.log(this.selecteFilterTypeForFiltering)
  }
}
