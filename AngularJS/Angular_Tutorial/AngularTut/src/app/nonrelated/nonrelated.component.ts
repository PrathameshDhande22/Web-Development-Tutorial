import { Component } from '@angular/core';
import { laptops } from '../../data/laptop';

@Component({
  selector: 'app-nonrelated',
  templateUrl: './nonrelated.component.html',
})
export class NonrelatedComponent {


  searchedText: string = ""

  onSearchText(value: string) {
    this.searchedText = value;
  }
}
