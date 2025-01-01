import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { catchError, delay, map, take, tap, throwError, timer } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
})
export class HttpComponent implements OnInit {
  // inject the instance of the HttpClient in component
  http: HttpClient = inject(HttpClient);
  posts: any[] = [];
  isloading: boolean = true;
  errorMessage: any = null;
  respmsg: string = '';

  ngOnInit(): void {
    this.isloading = true;
    // calling the get request method in these

    // passing the query params to it
    let QueryParams = new HttpParams().set('limit', 10).set('skip', 10);

    this.http
      .get('https://dummyjson.com/posts', { params: QueryParams })
      .pipe(
        map((value) => {
          return value['posts'];
        }),
        take(10),
        delay(10 * 1000)
      )
      .subscribe({
        next: (val) => {
          this.isloading = false;
          this.posts = val;
        },
        error: (err) => {
          this.isloading = false;
        },
      });

    this.http
      .get('https://dummyjson.com/pots', { params: QueryParams })
      .pipe(
        map((value) => {
          return value['posts'];
        }),
        take(10),
        delay(10 * 1000),
        catchError((err) => {
          this.errorMessage = err?.message;
          return throwError(() => err);
        })
      )
      .subscribe({
        next: (val) => {
          this.posts = val;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
