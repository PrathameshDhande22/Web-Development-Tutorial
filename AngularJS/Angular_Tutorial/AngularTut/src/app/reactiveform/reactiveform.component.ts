import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormRecord,
  Validators,
} from '@angular/forms';
import { CheckPasswordStrength, Range } from './custom.validator';

// creating the typed forms 
interface IRegisterForm {
  firstname: FormControl<string>,
  lastname: FormControl<string>,
  email: FormControl<string>,
  gender: FormControl<string>,
  address: FormGroup,
  dob: FormControl<string>,
  formarray: FormArray<FormControl<string>>,
  hobbies: FormArray<FormControl<string>>,
  studies: FormArray<FormGroup>,
  password: FormControl<string>,
  age: FormControl<number>,
  records: FormRecord<FormControl<string | number | any>>
}


@Component({
  selector: 'reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent implements OnInit {
  // creating the public property of type FormGroup
  reactiveform: FormGroup = null as any;

  ngOnInit(): void {
    // initializing or defining the form value or names in the formgroup
    // using the validators in the form control itself
    this.reactiveform = new FormGroup<IRegisterForm>({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl('', Validators.required),
      // Assigning the email validators
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('Male', Validators.required), // specifying the by default seleced value.
      // creating the nested form groups
      address: new FormGroup({
        state: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
      }),
      dob: new FormControl('', Validators.required),
      // defining the form array
      formarray: new FormArray([
        new FormControl(''),
        new FormControl(''),
        new FormControl(''),
      ]),
      // for adding the formcontrols dynamically
      hobbies: new FormArray([new FormControl('', Validators.required)]),
      // for adding the formgroups dynamically
      studies: new FormArray([]),
      // using the custom validator
      password: new FormControl('', [
        CheckPasswordStrength,
        Validators.required,
      ]),
      // using the custom validator with parameters
      age: new FormControl<number>(0, [Validators.required, Range(18, 50)]),
      // from angular 17 there is new concept called the form record which keeps the controls in the key value pair unlike the array where we need to track.
      records: new FormRecord<FormControl<string | number | any>>({
        year: new FormControl<number>(2003),
        month: new FormControl<number>(4),
      })
    });
  }

  // formgroup emits the onsubmit event which can be catched using ngsubmit event binding
  OnSubmit() {
    console.log(this.reactiveform);
  }

  // Adding the form controls in the array dynamically
  AddSkill() {
    // using the push method
    (this.reactiveform.get('hobbies') as FormArray).push(
      new FormControl(null, Validators.required)
    );
  }

  // deleting the form controls in the form array dynamically
  DeleteHobbies(index: number) {
    (this.reactiveform.get('hobbies') as FormArray).removeAt(index);
  }

  // Adding the school formgroup dynamically
  AddSchool() {
    (this.reactiveform.get('studies') as FormArray).push(
      new FormGroup({
        college: new FormControl(null, Validators.required),
        year: new FormControl(null, Validators.required),
        degree: new FormControl(null, Validators.required),
      })
    );
  }

  // Deleting the School Formgroup dynamically
  DeleteSchool(index: number) {
    (this.reactiveform.get('studies') as FormArray).removeAt(index);
  }
}
