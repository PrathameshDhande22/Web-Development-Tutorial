import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-custom-child-ref',
  imports: [],
  templateUrl: './custom-child-ref.html'
})
export class CustomChildRef {
  appname: InputSignal<string> = input.required<string>()
}
