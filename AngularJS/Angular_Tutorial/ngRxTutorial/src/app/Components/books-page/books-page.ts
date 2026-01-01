import { Component, inject, OnInit, viewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookActions } from '../../Store/Books/books.action';
import {
  BookSelector,
  errorBooksMessage,
  LoadingBookSelector,
} from '../../Store/Books/books.selectors';
import { BookCard } from '../book-card/book-card';
import { AddBookModal } from '../add-book-modal/add-book-modal';

@Component({
  selector: 'app-books-page',
  imports: [BookCard, AddBookModal],
  templateUrl: './books-page.html',
  styleUrl: './books-page.css',
})
export class BooksPage implements OnInit {
  // injecting the store
  private store = inject(Store);
  // selecting the selector
  loading = this.store.selectSignal(LoadingBookSelector);
  books = this.store.selectSignal(BookSelector);
  errorMessage = this.store.selectSignal(errorBooksMessage);
  bookaddModal = viewChild<AddBookModal>(AddBookModal);

  ngOnInit(): void {
    // dispatching the actions
    this.store.dispatch(BookActions.loadBooks());
  }

  removeBook(id: number): void {
    this.store.dispatch(BookActions.removeBook({ id }));
  }

  openModal() {
    this.bookaddModal()?.show();
  }
}
