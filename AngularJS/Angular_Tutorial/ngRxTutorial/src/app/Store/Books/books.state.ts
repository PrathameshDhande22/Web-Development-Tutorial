import { BookList, BookListFailure, UserCollection } from '../../types';

// creating the type for the state
export interface BookState extends BookList, BookListFailure, UserCollection {
  loading: boolean;
  loaded: boolean;
}

export const InitialBookState: BookState = {
  books: [],
  errormessage: null,
  loading: false,
  loaded: false,
  usercollection: [],
};
