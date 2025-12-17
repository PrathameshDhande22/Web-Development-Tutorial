import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { Authservice } from '../Services/authservice';

export const matchguardGuard: CanMatchFn = (route, segments) => {
  console.log(route, segments)
  const authservice = inject(Authservice)
  return authservice.isManager;
};
