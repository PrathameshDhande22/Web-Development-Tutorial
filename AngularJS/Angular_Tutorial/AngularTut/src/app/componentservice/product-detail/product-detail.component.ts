import { Component, inject, OnInit } from '@angular/core';
import { LaptopService } from '../../Services/laptop.service';
import { Laptop } from '../../../data/laptop';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  laptopservice: LaptopService = inject(LaptopService);

  selectedLaptop: Laptop = null as any;

  ngOnInit(): void {
    this.laptopservice.OnLaptopClick.subscribe(
      (value) => (this.selectedLaptop = value)
    );
  }
}
