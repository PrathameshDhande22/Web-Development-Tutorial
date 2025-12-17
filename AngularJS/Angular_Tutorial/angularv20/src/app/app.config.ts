import { ApplicationConfig, InjectionToken, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { Trial } from './Services/trial';


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
    provideRouter(routes)
  ]
};
