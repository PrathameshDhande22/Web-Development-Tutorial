import { Component, ElementRef, input, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'view-children-comp',
  templateUrl: './view-children-comp.component.html',
})
export class ViewChildrenCompComponent {

  // Using the ViewChildrent to get all the input elements reference
  @ViewChildren("InputEle")
  inputsElements: QueryList<ElementRef> = new QueryList<ElementRef>();


  showFullName() {
    let inputs: string = this.inputsElements.map((item) => (item.nativeElement as HTMLInputElement).value).reduce((prev, curr) => {
      return prev + ' ' + curr
    })
    alert("Your full Name is => " + inputs)

  }

}
