import { CanActivateChildFn } from '@angular/router';
import { Authservice } from '../Services/authservice';
import { inject } from '@angular/core';

export const activechildGuard: CanActivateChildFn = () => {
  const authservice = inject(Authservice)
  return authservice.isManager;
};
