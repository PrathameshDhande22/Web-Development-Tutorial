import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'templatedriven',
  templateUrl: './templatedriven.component.html',
})
export class TemplatedrivenComponent {
  // get the reference of the register form
  @ViewChild('registerform')
  form: NgForm = null as any;

  // these the submit button callback
  onSubmit() {
    console.log(this.form);
  }

  onSetBtn() {
    // for setting the value the structure must be same as the form
    this.form.form.setValue({
      firstname: 'firstname',
      lastname: 'lastname',
      email: 'email@gmail.com',
      gender: 'Male',
      dob: '2003-04-22',
      address: {
        state: 'Gujarat',
        city: 'ahemdabad',
      },
    });
  }

  onPatchBtn() {
    // setting only the specified key without interferring the others fields of the forms
    this.form.form.patchValue({
      address: {
        city: 'Vangaon',
        state: 'Maharashtra',
      },
    });
  }

  resetForm() {
    // reseting the form with the reset function present in the ngForm class.
    this.form.resetForm();
  }
}
