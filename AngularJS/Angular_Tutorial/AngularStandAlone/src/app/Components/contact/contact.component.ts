import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupName, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

export interface ContactForm {
  fullName: AbstractControl<string | null>;
  email: AbstractControl<string | null>;
  phone: AbstractControl<string | null>;
  subject: AbstractControl<string | null>;
  message: AbstractControl<string | null>;
}


@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styles: ``,
  standalone: true
})
export class ContactComponent {
  // creating the form using formgroup
  contactForm: FormGroup<ContactForm> = new FormGroup<ContactForm>({
    fullName: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    phone: new FormControl<string>('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    subject: new FormControl<string>('', [Validators.required]),
    message: new FormControl<string>('', [Validators.required, Validators.minLength(10)])
  })

  OnSubmit() {
    if (this.contactForm.valid) {
      this.contactForm.reset();
      alert("We will Contact You Soon")
    } else {
      alert("Please Enter Correct Details")
    }
  }

}
