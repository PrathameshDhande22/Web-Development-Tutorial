import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const newreq = req.clone({
    headers: req.headers.append("X-Auth", `22433`)
  })
  return next(newreq);
};
