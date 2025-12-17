import { Component, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-childcomponent-output',
  imports: [],
  templateUrl: './childcomponent-output.html'
})
export class ChildcomponentOutput {
  // Output event emitter
  buttonClicked: OutputEmitterRef<string> = output<string>();

  // whenever the button is clicked the button emits the value
  btnClick() {
    this.buttonClicked.emit("emitted");
  }
}
