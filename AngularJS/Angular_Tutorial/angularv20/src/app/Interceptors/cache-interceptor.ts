import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { CACHING_CONTEXT } from '../httpcontext';
import { inject } from '@angular/core';
import { CacheService } from '../Services/cacheService';
import { of, tap } from 'rxjs';

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  // inject the service
  const cacheService = inject(CacheService)

  // reading the context token
  if (req.context.get(CACHING_CONTEXT)) {
    const response = cacheService.get(req.urlWithParams)
    if (response) {
      return of(response)
    }
  }
  return next(req).pipe(
    tap((value) => {
      if (value.type === HttpEventType.Response) {
        cacheService.set(req.url, value)
      }
    })
  )
};
