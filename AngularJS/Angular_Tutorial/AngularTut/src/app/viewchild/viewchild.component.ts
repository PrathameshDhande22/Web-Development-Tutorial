import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
})
export class ViewchildComponent {

  // giving the reference of the Input tag here.
  @ViewChild("username")
  inputEle: ElementRef = undefined as any;

  // registering these button on click event
  showData() {
    let InputElement = this.inputEle.nativeElement as HTMLInputElement;
    alert("You have Typed the username => " + InputElement.value)
  }
}
