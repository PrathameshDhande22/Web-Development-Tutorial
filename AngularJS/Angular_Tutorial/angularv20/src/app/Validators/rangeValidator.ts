import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// Here we are creating our own range validator function
export function rangeValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl<string>): ValidationErrors | null => {
        if (control.value.length < min) {
            return {
                rangevalid: `The character must be greater than ${min}`
            }
        }
        else if (control.value.length > max) {
            return {
                rangevalid: `The characters must be less than ${max}`
            }
        }
        return null
    }
}