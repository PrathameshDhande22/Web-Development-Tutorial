import { ApplicationConfig, InjectionToken, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { Trial } from './Services/trial';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggingInterceptor } from './Interceptors/logging-interceptor';
import { authInterceptor } from './Interceptors/auth-interceptor';
import { cacheInterceptor } from './Interceptors/cache-interceptor';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';


// Providing the static value through the injection token
export interface AppConfigVars {
  title: string,
  apiurl: string
}

// creating injection token
export const APP_CONFIG_VAR: InjectionToken<AppConfigVars> = new InjectionToken<AppConfigVars>("config description")

// assiging the variable to it
const configvalues: AppConfigVars = {
  apiurl: "https://localhost:1000",
  title: 'AppConfiguration'
}

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: Trial },
    // providing the static value all over the application
    { provide: APP_CONFIG_VAR, useValue: configvalues },
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // providing the HTTP Client
    provideHttpClient(withInterceptors(
      [loggingInterceptor, authInterceptor, cacheInterceptor]
    )), provideClientHydration(withEventReplay())
  ]
};
