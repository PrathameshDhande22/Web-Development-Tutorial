import { Component, inject, OnInit } from '@angular/core';
import { LaptopService } from '../Services/laptop.service';
import { Laptop } from '../../data/laptop';

@Component({
  selector: 'componentservice',
  templateUrl: './componentservice.component.html',
})
export class ComponentserviceComponent implements OnInit {
  public laptopdetails: LaptopService = inject(LaptopService);

  public laptops: Laptop[] = [];

  // on component loads fill all the details of the laptop.
  ngOnInit() {
    this.laptops = this.laptopdetails.Laptops;
  }

  // when button clicked show the details of the laptop
  OnShowLaptop(laptop: Laptop) {
    this.laptopdetails.OnShowSelectedLaptop(laptop);
  }
}
