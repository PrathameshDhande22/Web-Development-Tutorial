import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { usercollectionSelector } from '../../Store/Books/books.selectors';
import { BookCard } from '../book-card/book-card';

@Component({
  selector: 'app-user-collection',
  imports: [BookCard],
  templateUrl: './user-collection.html',
  styleUrl: './user-collection.css',
})
export class UserCollection {
  private store = inject(Store);
  userCollectionselector = this.store.selectSignal(usercollectionSelector);
}
