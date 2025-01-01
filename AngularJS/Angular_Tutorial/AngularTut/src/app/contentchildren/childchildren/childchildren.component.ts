import { Component, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-childchildren',
  templateUrl: './childchildren.component.html',
})
export class ChildchildrenComponent {

  // ContentChildren to get the parent passed component
  @ContentChildren("divbox")
  divboxes: QueryList<ElementRef> = undefined as any;


  onbuttonClick() {
    this.divboxes.forEach((item, index) => {
      (item.nativeElement as HTMLDivElement).innerHTML = "You changed the Content of these element =>" + (index + Number(1))
    })
  }
}
