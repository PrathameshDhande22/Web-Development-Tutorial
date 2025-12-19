import { inject } from "@angular/core";
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { catchError, delay, map, Observable, of } from "rxjs";
import { Apiservice } from "../Services/apiservice";

export function PromoCodeValidator(): AsyncValidatorFn {
    const apiservice = inject(Apiservice)
    return function (control: AbstractControl<string>): Observable<ValidationErrors | null> {
        if(!control.value){
            return of(null)
        }
        return apiservice.checkPromoCodeAvailability(control.value).
            pipe(
                delay(800),
                map((value) => {
                    if (value) {
                        return null
                    } else {
                        return {
                            "promocode": "No Promo code Found"
                        }
                    }
                }),
                catchError(() => of(null))
            )
    }
}