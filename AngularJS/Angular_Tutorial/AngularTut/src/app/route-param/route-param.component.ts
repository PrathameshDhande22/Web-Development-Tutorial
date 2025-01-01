import { Component, OnInit } from '@angular/core';
import { Laptop } from '../../data/laptop';
import { ActivatedRoute } from '@angular/router';
import { LaptopService } from '../Services/laptop.service';

@Component({
  selector: 'route-param',
  templateUrl: './route-param.component.html',
})
export class RouteParamComponent implements OnInit {
  selectedLaptop: Laptop = null as any;

  constructor(
    private activeRoute: ActivatedRoute,
    private laptopservice: LaptopService
  ) {}

  ngOnInit(): void {
    // Getting the current route id in the component.
    let laptopindex: number = Number(
      this.activeRoute.snapshot.paramMap.get('index')
    );
    
    this.selectedLaptop = this.laptopservice.laptopByIndex(laptopindex);
  }
}
