import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { loginInterceptor } from './shared/interceptors/login.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient( withInterceptors([loginInterceptor]) ),
    provideRouter(routes, withComponentInputBinding()), provideAnimationsAsync()]
};
