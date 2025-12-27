import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes, withAppShell } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppShell } from './app-shell/app-shell';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes), withAppShell(AppShell)),
    // enabling the client hydration
    provideClientHydration(withEventReplay())
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);


if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}
    