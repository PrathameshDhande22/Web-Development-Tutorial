import { Component, Input } from '@angular/core';
import { laptops } from '../../../data/laptop';

@Component({
  selector: 'app-childnames',
  templateUrl: './childnames.component.html',
})
export class ChildnamesComponent {

  listofLaptopname: string[] = laptops.map((value) => value.name)

  @Input("searched")
  searchedText: string = ""

  checkIfMatches(nametomatch: string) {
    let regex = new RegExp(`${this.searchedText}`, "i")
    return regex.test(nametomatch)
  }
}
