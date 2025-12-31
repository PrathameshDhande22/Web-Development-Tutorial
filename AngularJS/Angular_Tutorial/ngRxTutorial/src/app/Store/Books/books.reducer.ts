import { createReducer, on } from '@ngrx/store';
import * as BookActions from './books.action';
import { InitialBookState } from './books.state';

export const BookStoreKey: string = 'books';

// create the Reducer
export const booksReducer = createReducer(
  InitialBookState,
  on(BookActions.BookActions.loadBooks, (state) =>
    state.loaded
      ? state
      : {
          ...state,
          loading: true,
          errormessage: null,
        }
  ),
  on(BookActions.LoadBooksSuccess, (state, { books }) => ({
    books: books,
    errormessage: null,
    loading: false,
    loaded: true,
  })),
  on(BookActions.LoadBooksFailure, (state, { errormessage }) => ({
    ...state,
    loading: false,
    errormessage: errormessage,
  }))
);
