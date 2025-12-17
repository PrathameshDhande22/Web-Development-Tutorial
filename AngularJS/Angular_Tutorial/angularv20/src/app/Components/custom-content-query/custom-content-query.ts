import { AfterContentInit, Component, contentChild, contentChildren, OnChanges, OnInit, Signal } from '@angular/core';
import { CustomChild } from '../custom-child/custom-child';
import { CustomChildRef } from '../custom-child-ref/custom-child-ref';

@Component({
  selector: 'app-custom-content-query',
  imports: [],
  templateUrl: './custom-content-query.html'
})
export class CustomContentQuery implements AfterContentInit, OnInit, OnChanges {
  // Getting the content provided by the parent component
  customChild: Signal<CustomChild | undefined> = contentChild(CustomChild)

  // Getting the content children from the projected parent component
  customChilds: Signal<readonly CustomChildRef[] | undefined> = contentChildren(CustomChildRef)

  // accessing in the constructor
  constructor() {
    // the constructor returns it as undefined
    console.log("Returning value from the constructor " + this.customChild()?.childName)
  }
  // runs after all the children have been initialized
  ngAfterContentInit(): void {
    /* accessing the content chiildren */
    console.log("NgAfterContentInit reading the Value =>" + this.customChilds()?.map(value => value.appname()).join(", "))
  }

  ngOnChanges(): void {
    /* accessing the content chiildren */
    console.log("ngOnChanges reading the Value =>" + this.customChilds()?.map(value => value.appname()).join(", "))
  }
  ngOnInit(): void {
    /* accessing the content chiildren */
    console.log("ngOnInit reading the Value =>" + this.customChilds()?.map(value => value.appname()).join(", "))
  }

}
