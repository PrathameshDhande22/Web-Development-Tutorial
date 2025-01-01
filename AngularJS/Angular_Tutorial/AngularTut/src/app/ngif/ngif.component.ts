import { Component } from '@angular/core';

@Component({
  selector: 'ngif',
  templateUrl: './ngif.component.html',
})
export class NgifComponent {
  searchText: string = ""
  names: string[] = ["John", "Celvin", "Kelvin", "RutherFord", "aryan", "Prathamesh", "Jadhav"]

  toDisplay(): boolean {
    this.searchText = this.searchText.trim()
    return this.searchText !== ""
  }
}
