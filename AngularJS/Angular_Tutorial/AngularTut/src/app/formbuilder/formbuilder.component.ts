import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


interface IMessage {
  email: FormControl<string>,
  message: FormControl<string>,
  feedback: FormControl<string>
}

@Component({
  selector: 'formbuilder',
  templateUrl: './formbuilder.component.html',
})
export class FormbuilderComponent implements OnInit {
  // injecting the form Builder into these component
  formbuilder: FormBuilder = inject(FormBuilder)

  messageForm: FormGroup = null as any;
  ngOnInit(): void {
    // grouping the form builder
    this.messageForm = this.formbuilder.group({
      email: [""],
      feedback: [""],
      message: [""]
    })
  }

  onSubmitForm() {
    console.log(this.messageForm)
  }
}
