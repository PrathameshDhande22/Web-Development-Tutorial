import { AfterViewChecked, AfterViewInit, Component, computed, ElementRef, Signal, viewChild, viewChildren } from '@angular/core';
import { CustomChild } from "../custom-child/custom-child";
import { CustomChildRef } from "../custom-child-ref/custom-child-ref";
import { CustomContentQuery } from '../custom-content-query/custom-content-query';

@Component({
  selector: 'app-references',
  imports: [CustomChild, CustomChildRef, CustomContentQuery],
  templateUrl: './references.html'
})
export class References implements AfterViewInit, AfterViewChecked {
  // getting the access of the child from the viewchild
  customchild1: Signal<CustomChild | undefined> = viewChild(CustomChild)

  // Getting the access of the children from the ViewChildren
  childrens: Signal<readonly CustomChildRef[]> = viewChildren(CustomChildRef)
  childrensAppName = computed(() => this.childrens().map((value) => value.appname()).join(","));

  // Getting the Child from the Template Reference Variable
  inputNameElement = viewChild.required<ElementRef<HTMLInputElement>>("inputname")

  showAlertInputName() {
    alert(this.inputNameElement().nativeElement.value)
  }

  // after the view or template is being initialized.
  ngAfterViewInit(): void {
    console.log("NgAfterViewInit => " + this.customchild1()?.childName)
  }

  // runs after every change 
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked runs => ", this.inputNameElement())
  }

  constructor() {
    console.log("ViewChild is not Initialiedin Constructor " + this.customchild1()?.childName)
  }
}
