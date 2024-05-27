import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { StorageService } from '../../core/services/storage.service';
import { environment } from '../../../environments/environment.development';

export const loginInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

  const storage = inject( StorageService );

  return next( req ).pipe( tap( ( response: any ) => {
      if( response.ok && response.url.startsWith(`${environment.API_URL}/login`)){

        storage.setToken( response.body.accessToken );
        storage.setUserId( response.body.user.id );

      }
    }
  ));
};
