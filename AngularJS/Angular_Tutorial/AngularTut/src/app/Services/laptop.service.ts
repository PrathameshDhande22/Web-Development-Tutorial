import { EventEmitter, Injectable } from '@angular/core';
import { Laptop, laptops } from '../../data/laptop';

@Injectable({
  providedIn: 'root',
})
export class LaptopService {
  // gets the list of the laptops
  public get Laptops(): Laptop[] {
    return laptops;
  }

  public OnLaptopClick: EventEmitter<Laptop> = new EventEmitter<Laptop>();

  // emit the selected laptop details
  OnShowSelectedLaptop(laptop: Laptop) {
    this.OnLaptopClick.emit(laptop);
  }

  // get laptop by its index
  public laptopByIndex(idx: number): Laptop {
    return this.Laptops[idx];
  }
}
