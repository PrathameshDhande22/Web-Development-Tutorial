import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book, BookFormInput, BookList } from '../types';
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

  addBook(inputs: BookFormInput): Observable<HttpResponse<Book>> {
    return this.httpclient.post<Book>('/books', inputs, {
      observe: 'response',
    });
  }
}
