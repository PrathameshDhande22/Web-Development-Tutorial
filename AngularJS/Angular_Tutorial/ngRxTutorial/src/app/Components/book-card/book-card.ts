import { Component, input, output } from '@angular/core';
import { Book } from '../../types';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-card',
  imports: [DatePipe],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCard {
  book = input.required<Book>();
  bookidremove = output<number>();

  removeclick(id: number): void {
    this.bookidremove.emit(id);
  }
}
