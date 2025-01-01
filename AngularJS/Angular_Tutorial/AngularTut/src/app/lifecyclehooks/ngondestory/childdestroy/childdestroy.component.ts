import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'childdestroy',
  templateUrl: './childdestroy.component.html',
})
export class ChilddestroyComponent implements OnDestroy {
  // these hook will be called whenever the dom is removed
  ngOnDestroy(): void {
    console.log("These is ngOnDEstroy Hook")
    console.log("these hook is called becuase the button is hidden");
  }
}
