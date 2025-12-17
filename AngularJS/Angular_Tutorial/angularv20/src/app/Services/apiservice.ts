import { Injectable } from '@angular/core';

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


@Injectable({
  providedIn: 'root'
})
export class Apiservice {
  get getMockData(): MockData[] {
    return MOCK_DATA
  }
}
