import { Component } from '@angular/core';

@Component({
  selector: 'twowaydatabinding',
  templateUrl: './twowaydatabinding.component.html',
})
export class TwowaydatabindingComponent {
  searchText: string = "Mens Clothes"

  updateSearchText(event: any) {
    console.log(event)
  }
}
