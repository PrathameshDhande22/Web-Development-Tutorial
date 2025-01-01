import { Component } from '@angular/core';
import { data, Products } from "../../data/products"


@Component({
  selector: 'ngfor',
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {
  // ng for used to iterate over the list or an array
  items: number[] = [10, 9, 8, 7, 6, 5]

  // rendering the list of products
  productItems: Products[] = data
}
