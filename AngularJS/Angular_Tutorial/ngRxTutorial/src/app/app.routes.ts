import { Routes } from '@angular/router';
import { Counter } from './Components/counter/counter';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Counter,
  },
  {
    path: 'signal-store',
    loadComponent: () =>
      import('./Components/signal-store-counter/signal-store-counter').then(
        (mod) => mod.SignalStoreCounter
      ),
  },
  {
    path: 'books',
    loadComponent: () => import('./Components/books-page/books-page').then((mod) => mod.BooksPage),
  },
  {
    path: 'usercollection',
    loadComponent: () =>
      import('./Components/user-collection/user-collection').then((mod) => mod.UserCollection),
  },
];
