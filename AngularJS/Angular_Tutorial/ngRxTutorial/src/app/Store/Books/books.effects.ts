import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BookService } from '../../Services/book-service';
import { BookActions, LoadBooksFailure, LoadBooksSuccess, RemoveBookAction } from './books.action';
import { catchError, delay, exhaustMap, filter, map, of, tap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectBooksLoaded } from './books.selectors';

// create the effects for the actions
@Injectable()
export class BookEffects {
  private action$ = inject(Actions);
  private bookService = inject(BookService);
  private store = inject(Store);

  loadBooks$ = createEffect(() => {
    return this.action$.pipe(
      ofType(BookActions.loadBooks),
      withLatestFrom(this.store.select(selectBooksLoaded)),
      filter(([_, loaded]) => !loaded),
      exhaustMap(() =>
        this.bookService.getAllBooks().pipe(
          delay(3000),
          map((value) => LoadBooksSuccess({ books: value })),
          catchError((err: { message: string }) =>
            of(LoadBooksFailure({ errormessage: err.message }))
          )
        )
      )
    );
  });

  removebook$ = createEffect(() => {
    return this.action$.pipe(
      ofType(BookActions.removeBook),
      exhaustMap((action) =>
        // using the props in the effects
        this.bookService.removeBook(action.id).pipe(
          map(() => RemoveBookAction.removeBookSuccess({ id: action.id })),
          catchError(() => of(RemoveBookAction.removeBookFailure()))
        )
      )
    );
  });
}
