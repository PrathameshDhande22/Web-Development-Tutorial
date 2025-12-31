import { BookList, BookListFailure } from '../../types';

// creating the type for the state
export interface BookState extends BookList, BookListFailure {
  loading: boolean;
  loaded: boolean;
}

export const InitialBookState: BookState = {
  books: [],
  errormessage: null,
  loading: false,
  loaded: false,
};
