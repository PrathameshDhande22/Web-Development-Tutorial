import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface MockData {
  Id: number,
  Product: string
}



const MOCK_DATA: MockData[] = [
  {
    Id: 1,
    Product: "atta premimum"
  }, {
    Id: 2,
    Product: "maida"
  },
  {
    Id: 135,
    Product: "rava"
  }
]

const Promo_Codes = [
  "ABCDE",
  "FGHI"
]


@Injectable({
  providedIn: 'root'
})
export class Apiservice {
  get getMockData(): MockData[] {
    return MOCK_DATA
  }

  checkPromoCodeAvailability(promocode: string): Observable<boolean> {
    let found = false;

    if (Promo_Codes.find((value) => value === promocode)) {
      found = true;
    }
    return of(found)
  }
}
