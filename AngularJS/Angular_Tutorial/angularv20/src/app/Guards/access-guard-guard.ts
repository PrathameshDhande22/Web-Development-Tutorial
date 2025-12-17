import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Authservice } from '../Services/authservice';

export const accessGuardGuard: CanActivateFn = () => {
  const authservice = inject(Authservice)
  return authservice.isAuthenticated;
};
