import { Component, inject, OnInit } from '@angular/core';
import { Products } from '../../data/products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'resolve-guard',
  templateUrl: './resolve-guard.component.html',
})
export class ResolveGuardComponent implements OnInit {
  productItems: Products[] = [];
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  totalProducts: number = 0;

  
  ngOnInit(): void {
    // getting the static data which we have declared in routes
    this.totalProducts = this.activatedRoute.snapshot.data['totalProducts'];

    // getting the data from the resolve property
    this.productItems = this.activatedRoute.snapshot.data['products'];
  }
}
