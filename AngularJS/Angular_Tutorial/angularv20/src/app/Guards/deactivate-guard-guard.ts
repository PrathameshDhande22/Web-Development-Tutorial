import { CanDeactivateFn } from '@angular/router';
import { CanDeactivateComponent } from '../Components/guardstut/can-deactivate/can-deactivate';

export const deactivateGuardGuard: CanDeactivateFn<CanDeactivateComponent> = (component, currentRoute, currentState, nextState) => {
  console.log(currentRoute, currentState, nextState)
  return component.hasUnsavedChanges() ? confirm("There are has some unsavved changes do you want to leave ?") : true
};
