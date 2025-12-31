import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { countReducer } from './Store/Counter/counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { booksReducer, BookStoreKey } from './Store/Books/books.reducer';
import { apiUrlInterceptor } from './Interceptors/api-url-interceptor';
import { BookEffects } from './Store/Books/books.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([apiUrlInterceptor])),
    provideRouter(routes),
    // provide the store to globally with reducer
    provideStore({ count: countReducer }),
    // providing the State
    provideState({
      name: BookStoreKey,
      reducer: booksReducer,
    }),
    // DevTools for the Store
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    // Providing the State Effects
    provideEffects(BookEffects),
  ],
};
