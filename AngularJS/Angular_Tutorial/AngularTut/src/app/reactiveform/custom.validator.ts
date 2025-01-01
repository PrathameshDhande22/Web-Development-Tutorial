import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// creating custom validator
export const CheckPasswordStrength: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  let pattern: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return !pattern.test(control.value) ? { CheckPasswordStrength: true } : null;
};

// creating the validator with callback function.
export const Range = (min: number, max: number) => {
  return function (control: AbstractControl): ValidationErrors | null {
    if (Number(control.value) < min || Number(control.value) > max) {
      return { Range: true };
    }
    return null;
  };
};
