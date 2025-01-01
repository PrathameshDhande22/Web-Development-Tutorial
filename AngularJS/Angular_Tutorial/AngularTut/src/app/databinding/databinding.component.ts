import { Component } from '@angular/core';

type ProductDetails = {
  name: string,
  price: number,
  color: string,
  pImage: string,
  stock: number
}


@Component({
  selector: 'databinding',
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  // passing the data from the component to view
  name: string = "IPhone 16 Pro"
  price: number = 12344
  color: string = "Matte Green"

  // passing the object of data from teh component to view.
  product: ProductDetails = {
    name: "Samsung S24",
    color: "Black",
    price: 455555,
    pImage: "/assets/Images/gta6.jpg",
    stock: -1
  }

  username:string="Prathamesh"

  // calling the function from the view
  getdiscountPrice() {
    return this.product.price - 10000;
  }

  date: number = Date.now()
  getDate(): Date {
    return new Date()
  }
}
