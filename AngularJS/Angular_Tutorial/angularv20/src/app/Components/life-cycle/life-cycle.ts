import { AfterContentChecked, AfterContentInit, afterEveryRender, afterNextRender, Component, DoCheck, input, InputSignal, OnChanges, OnInit, signal, WritableSignal } from '@angular/core';
import { destroyable } from "../destroyable/destroyable";

@Component({
  selector: 'app-life-cycle',
  imports: [destroyable],
  templateUrl: './life-cycle.html'
})
export class LifeCycle implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  valueofSignal: WritableSignal<string> = signal<string>("")

  valueFromInput: InputSignal<string> = input.required<string>()
  protected toDestroy = false;


  // Invokes when the angular instantiates the component
  constructor() {
    console.log("LifeCycle Hooks Has been Initiated")

    // rendering the callback for afterEveryRender and afterNextRender
    // Render Hooks
    afterEveryRender(() => {
      console.log("Runs after Every Render")
    })

    afterNextRender(() => {
      console.log("will be runing in the next render")
    })

  }

  // lifecycle hook implemented by OnInit
  ngOnInit(): void {
    console.log("NgOnInit Called")
    // changing the state of the value 
    console.log("Value Before setting by NgOnInit:" + this.valueofSignal())
    this.valueofSignal.set("Value by NgOnInit")
  }

  // lifecycle hook implemented by OnChanges
  ngOnChanges(): void {
    console.log("NgOnChanges Called")
    // changing the state of the value 
    console.log("Value Before setting by NgOnChanges:" + this.valueofSignal())
    this.valueofSignal.set("Value by NgOnChanges")
  }

  ngDoCheck(): void {
    console.log("Runs everytime when some template changes")
  }

  ngAfterContentInit(): void {
    console.log("Another method NgAfterContentInit CAlled")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked runs")
  }
}
