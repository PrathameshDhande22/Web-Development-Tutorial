import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookStoreKey } from './books.reducer';
import { BookState } from './books.state';
// creating the selectors
export const BookSelectorFeature = createFeatureSelector<BookState>(BookStoreKey);

export const BookSelector = createSelector(BookSelectorFeature, (state: BookState) => state.books);

export const LoadingBookSelector = createSelector(
  BookSelectorFeature,
  (state: BookState) => state.loading
);

export const selectBooksLoaded = createSelector(BookSelectorFeature, (state) => state.loaded);

export const errorBooksMessage = createSelector(BookSelectorFeature, (state) => state.errormessage);
