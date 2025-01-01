import { Component, ContentChild, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-childtutorial',
  templateUrl: './childtutorial.component.html',
})
export class ChildtutorialComponent {

  // getting the component reference from the parent component
  @ContentChild("headertag")
  Headertag: ElementRef = undefined as any;

  // same using the viewchild we cannot achieve because it is element of parent component.
  @ViewChild("headertag")
  newHeader:ElementRef = undefined as any;

  onButtonClick(){
    console.log(this.Headertag.nativeElement)
    // console.log(this.newHeader.nativeElement);
  }

}
