import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormArray, FormRecord } from '@angular/forms';

@Component({
  selector: 'app-reactiveformstut',
  // Import the Reactive forms module
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveformstut.html'
})
export class Reactiveformstut {
  // declare one variable with formcontrol
  username = new FormControl("")

  // update the value of the formcontrol
  updateUsername() {
    this.username.setValue("scienman")
  }

  // using the formbuilder service to create the repetitive form
  private formbuilder = inject(FormBuilder);

  // Generate the form controls using the formbuilder
  address = this.formbuilder.group(
    {
      // adding the validators for validating the input
      addressline1: ['', Validators.required],
      addressline2: [''],
      pincode: [''],
      details: this.formbuilder.group({
        state: ['']
      }),
      // creating the dynamic forms using the formArray class
      tags: this.formbuilder.array([this.formbuilder.control('')])
    }
  )

  get tagsinputs() {
    return (this.address.get("tags") as FormArray)
  }

  // for adding the new tag in the array
  addNewTag() {
    this.tagsinputs.push(this.formbuilder.control(""))
  }

  public constructor() {
    this.profileform.events.subscribe((value) => {
      console.log("Event Called ", value.source)
    })
  }

  // form record
  record = new FormRecord({
    shipping: new FormControl(""),
    delivery: new FormControl("")
  })

  // form group
  profileform = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl("")
  })

  onSubmit() {
    alert(this.address.value)
  }

  onsubmit() {
    // printing the values 
    console.log(this.profileform.value)
  }

  patchValue() {
    this.profileform.patchValue({
      lastname: "Lastname patched"
    })
  }
}
