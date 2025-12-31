import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const apiUrlInterceptor: HttpInterceptorFn = (req, next) => {
  // replace the base api url with the attached api url
  const reqclone = req.clone({
    url: environment.BASE_URL.concat(req.url),
  });
  return next(reqclone);
};
