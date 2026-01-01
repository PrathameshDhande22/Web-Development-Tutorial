import { Component, ElementRef, inject, OnDestroy, signal, viewChild } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookService } from '../../Services/book-service';
import { map, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { BookActions } from '../../Store/Books/books.action';

interface BookForm {
  title: FormControl<string>;
  author: FormControl<string>;
  isbn: FormControl<string | null>;
  publishedYear: FormControl<number | null>;
  imgurl: FormControl<string | null>;
}

@Component({
  selector: 'app-add-book-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './add-book-modal.html',
  styleUrl: './add-book-modal.css',
})
export class AddBookModal {
  private addbookModal = viewChild<ElementRef<HTMLDialogElement>>('addBookModal');
  private formbuilder = inject(NonNullableFormBuilder);
  private bookservice = inject(BookService);
  private store = inject(Store);

  bookaddedconfirmation = signal<boolean>(false);

  // creating the form using the form builder
  addbook = this.formbuilder.group<BookForm>({
    title: this.formbuilder.control('', [Validators.required]),
    author: this.formbuilder.control('', [Validators.required]),
    imgurl: this.formbuilder.control(
      null,
      Validators.pattern(/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|bmp|svg)(\?.*)?$/)
    ),
    isbn: this.formbuilder.control(null),
    publishedYear: this.formbuilder.control(null, [
      Validators.pattern(/^(19|20)\d{2}$/),
      Validators.min(1900),
      Validators.max(new Date().getFullYear()),
    ]),
  });

  markInvalid(control: AbstractControl<unknown>) {
    return control.touched && control.invalid;
  }

  getErrors<K extends keyof typeof this.addbook.controls>(controlName: K): string[] {
    const control = this.addbook.controls[controlName];

    if (!control.errors || !control.touched) return [];

    const map: Record<string, (e: any) => string> = {
      required: () => 'This field is required',
      max: (e) => `Minimum ${e.max}`,
      min: (e) => `Maximum ${e.min} `,
      pattern: () => 'Invalid format',
    };

    return Object.keys(control.errors).map((key) =>
      map[key] ? map[key](control.errors![key]) : 'Invalid field'
    );
  }

  show(): void {
    this.addbookModal()?.nativeElement.showModal();
  }

  submitAddBookForm() {
    this.bookservice.addBook(this.addbook.getRawValue()).subscribe((value) => {
      if (value.status === 201 && value.body) {
        this.bookaddedconfirmation.set(true);
        this.store.dispatch(BookActions.addBook(value.body));
      }
    });
  }

  close(): void {
    this.addbookModal()?.nativeElement.close();
    this.bookaddedconfirmation.set(false);
    this.addbook.reset();
  }
}
