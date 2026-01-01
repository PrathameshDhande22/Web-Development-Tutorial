import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book, BookList, BookListFailure, RemoveBookProps } from '../../types';

// create the action group for loading the books
export const BookActions = createActionGroup({
  source: 'Books',
  events: {
    LoadBooks: emptyProps(),
    RemoveBook: props<RemoveBookProps>(),
    AddBook: props<Book>(),
  },
});

// create the action with the prop
export const LoadBooksSuccess = createAction('[Books] Load Success', props<BookList>());
export const LoadBooksFailure = createAction('[Books] Load Failure', props<BookListFailure>());

export const RemoveBookAction = createActionGroup({
  source: 'Remove Book',
  events: {
    RemoveBookSuccess: props<RemoveBookProps>(),
    RemoveBookFailure: emptyProps(),
  },
});

export const UserBookCollection = createActionGroup({
  source: 'User Collection',
  events: {
    AddBook: props<{ id: number }>(),
    RemoveBook: props<{ id: number }>(),
  },
});
