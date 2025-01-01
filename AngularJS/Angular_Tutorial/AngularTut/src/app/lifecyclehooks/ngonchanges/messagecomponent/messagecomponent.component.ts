import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'messagecomponent',
  templateUrl: './messagecomponent.component.html',
})
// ngOnChanges Hook methods it is present in OnChanges interface
export class MessagecomponentComponent implements OnChanges, OnInit, DoCheck {

  @Input("message")
  message: string = ""


  constructor() {
    console.log("Message Component is called")
    console.log(this.message);
    this.message = "Called by Constructor"
  }

  // Ng onchanges hook with the parameter as the changes which takes the previous changes.
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Last Changes => ", changes)
    console.log("NgOnChanges Hook Called.")
  }

  // NgOnInit Hook calls when the first change detection cycle happens means after the ngOnChanges hook. The child component is not created.
  ngOnInit(): void {
    console.log("ngonInit hook is called");
    this.message = "Called by NgOnInit"
  }

  // ngdoCheck executes after change cycle detection. it is called after ngDoChange and ngDoInit.
  ngDoCheck(): void {
    console.log("ngdocheck hook is called");
    console.log(this.message, "<= getting these message on every change cycle.")
  }

}
