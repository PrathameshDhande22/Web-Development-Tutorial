import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  CanActivateChildFn,
  CanDeactivateFn,
  ResolveFn,
} from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { CandeactivateformComponent } from '../candeactivateform/candeactivateform.component';
import { data, Products } from '../../data/products';

// implementing the CanActivateFn guard.
// when it returns true you can able to view the specified component.
export const CanActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  let authService: AuthService = inject(AuthService);

  return authService.isLoggedIn;
};

// implementing the canActivate Child guard
export const CanActivateChild: CanActivateChildFn = (childroute, state) => {
  return CanActivate(childroute, state);
};

// implementing the CanDeactivate Route Guard
export const CanDeactivateGuard: CanDeactivateFn<CandeactivateformComponent> = (
  component: CandeactivateformComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentstate: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  return component.CanExit();
};

// Implementing the Resolve Route guard
export const ResolveData: ResolveFn<Products[]> = () => {
  return data;
};
