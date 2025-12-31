import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book, BookList, BookListFailure } from '../../types';

// create the action group for loading the books
export const BookActions = createActionGroup({
  source: 'Books',
  events: {
    LoadBooks: emptyProps(),
    RemoveBook: props,
  },
});

// create the action with the prop
export const LoadBooksSuccess = createAction('[Books] Load Success', props<BookList>());
export const LoadBooksFailure = createAction('[Books] Load Failure', props<BookListFailure>());
