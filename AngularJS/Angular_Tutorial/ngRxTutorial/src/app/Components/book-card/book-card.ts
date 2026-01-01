import { Component, inject, input, OnInit, output, viewChild } from '@angular/core';
import { Book } from '../../types';
import { DatePipe } from '@angular/common';
import { AddBookModal } from '../add-book-modal/add-book-modal';
import { Store } from '@ngrx/store';
import { UserBookCollection } from '../../Store/Books/books.action';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  imports: [DatePipe],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCard implements OnInit {
  book = input.required<Book>();
  bookidremove = output<number>();
  routeshown: 'list' | 'collection' | null = null;

  private router = inject(Router);
  private store = inject(Store);

  ngOnInit() {
    this.router.url === '/usercollection'
      ? (this.routeshown = 'collection')
      : (this.routeshown = 'list');
  }

  removeclick(id: number): void {
    this.bookidremove.emit(id);
  }

  addtoCollectionBtnClick() {
    this.store.dispatch(UserBookCollection.addBook({ id: this.book().id }));
  }

  removeFromCollectionBtnClick() {
    this.store.dispatch(
      UserBookCollection.removeBook({
        id: this.book().id,
      })
    );
  }
}
