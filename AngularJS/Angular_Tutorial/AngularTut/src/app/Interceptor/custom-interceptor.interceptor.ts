import {
  HttpInterceptorFn,
  HttpInterceptor,
  HttpRequest,
  HttpHandlerFn,
} from '@angular/common/http';

// creatiing the custom interceptor
export const customInterceptorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  // setting the header

  // firstly creating the clone of the request
  const newrequest = req.clone({
    headers: req.headers.append('X-Token', 'dkfsadfksdfsdkfnsdfsdfks'),
  });
  return next(newrequest);
};
