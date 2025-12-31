import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookActions } from '../../Store/Books/books.action';
import {
  BookSelector,
  errorBooksMessage,
  LoadingBookSelector,
} from '../../Store/Books/books.selectors';
import { BookCard } from '../book-card/book-card';

@Component({
  selector: 'app-books-page',
  imports: [BookCard],
  templateUrl: './books-page.html',
  styleUrl: './books-page.css',
})
export class BooksPage implements OnInit {
  private store = inject(Store);
  loading = this.store.selectSignal(LoadingBookSelector);
  books = this.store.selectSignal(BookSelector);
  errorMessage = this.store.selectSignal(errorBooksMessage);

  ngOnInit(): void {
    // dispatching the actions
    this.store.dispatch(BookActions.loadBooks());
  }
}
