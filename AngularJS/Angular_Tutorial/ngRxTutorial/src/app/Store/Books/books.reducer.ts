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
    ...state,
    books: books,
    errormessage: null,
    loading: false,
    loaded: true,
  })),
  on(BookActions.LoadBooksFailure, (state, { errormessage }) => ({
    ...state,
    loading: false,
    errormessage: errormessage,
  })),
  on(BookActions.RemoveBookAction.removeBookSuccess, (state, { id }) => ({
    ...state,
    books: state.books.filter((value) => value.id !== id),
  })),
  on(BookActions.BookActions.addBook, (state, book) => ({
    ...state,
    books: [...state.books, book],
  })),
  on(BookActions.UserBookCollection.addBook, (state, { id }) => {
    // find the books
    const book = state.books.find((value) => value.id === id);

    if (!book) {
      return state;
    }

    // Prevent duplicates in user collection
    const alreadyExists = state.usercollection.some((b) => b.id === id);

    if (alreadyExists) {
      return state;
    }

    return {
      ...state,
      books: state.books.filter((value) => value.id !== id),
      usercollection: [...state.usercollection, book],
    };
  }),
  on(BookActions.UserBookCollection.removeBook, (state, { id }) => {
    // find the book in the usercollection
    const book = state.usercollection.find((value) => value.id === id);
    if (!book) {
      return state;
    }
    return {
      ...state,
      books: [...state.books, book],
      usercollection: state.usercollection.filter((value) => value.id !== id),
    };
  })
);
