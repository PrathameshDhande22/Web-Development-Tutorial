import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book, BookList } from '../types';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private httpclient = inject(HttpClient);

  getAllBooks(): Observable<Book[]> {
    return this.httpclient.get<Book[]>('/books');
  }

  removeBook(id: number): Observable<void> {
    return this.httpclient.delete<void>(`/books/${id}`);
  }
}
