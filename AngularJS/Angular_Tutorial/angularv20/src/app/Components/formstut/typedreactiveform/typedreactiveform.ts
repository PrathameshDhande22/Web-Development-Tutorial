import { KeyValuePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormRecord, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { generate } from 'random-words'
import { rangeValidator } from '../../../Validators/rangeValidator';

interface LoginForm {
  username: FormControl<string | null>
  password: FormControl<string | null>
}

interface UserDetails {
  firstname: FormControl<string | null>
  lastname: FormControl<string | null>
  dateofbirth: FormControl<string | null>
}

@Component({
  selector: 'app-typedreactiveform',
  imports: [ReactiveFormsModule, KeyValuePipe],
  templateUrl: './typedreactiveform.html',
})
export class Typedreactiveform {
  // defining the type explicitly to the formcontrol
  username = new FormControl<string | null>("")
  tags = new FormArray<FormControl<string | null>>([
    new FormControl<string>("C#")
  ])

  // defining the type using the interface
  loginform = new FormGroup<LoginForm>({
    password: new FormControl<string>("", {
      nonNullable: true
    }),
    username: new FormControl<string>("", {
      nonNullable: true
    })
  })


  // defining the type in FormRecord
  address = new FormRecord<FormControl<string | null>>({});

  addNewform() {

    this.address.addControl(String(generate({
      maxLength: 6,
      exactly: 1
    })), new FormControl(), {
      emitEvent: true
    })
  }

  // defining the type in FormBuilder
  formbuilder = inject(NonNullableFormBuilder)

  userdetailsform = this.formbuilder.group<UserDetails>({
    dateofbirth: this.formbuilder.control(''),
    firstname: this.formbuilder.control(''),
    lastname: this.formbuilder.control('')
  })

  // using the custom validator
  usernameselect = new FormControl<string>("", [
    rangeValidator(3, 10)
  ])
}
