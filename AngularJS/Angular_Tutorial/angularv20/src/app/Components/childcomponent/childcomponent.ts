import { Component, Input, input, InputSignal, InputSignalWithTransform, model, ModelSignal } from '@angular/core';

function transformToPx(value: number): string {
  return `${value}px`
}

@Component({
  selector: 'app-childcomponent',
  imports: [],
  templateUrl: './childcomponent.html'
})
export class Childcomponent {
  // declaring the input using signal it returns the InputSignal
  value: InputSignal<number> = input<number>(0);

  // Creating the input as required 
  name: InputSignal<string> = input.required<string>();

  // creating the input with transforms
  valueTransform: InputSignalWithTransform<string, number> = input<string, number>("", {
    transform: transformToPx,
  })

  // Model Inputs
  // If the value is changed then it will send the updated to the parent component. Basically it is two-way binding.
  modelvalue: ModelSignal<string> = model.required<string>()

  // Input using input decorator
  @Input({ required: true })
  sampleValue = ""
}
