import { Component } from '@angular/core';

@Component({
  selector: 'app-ngonchanges',
  templateUrl: './ngonchanges.component.html',
})
export class NgonchangesComponent {
  message: string = ""


  onBtnClick(inputEle: HTMLInputElement) {
    console.log("Button Clicked")
    this.message = inputEle.value
  }
}
