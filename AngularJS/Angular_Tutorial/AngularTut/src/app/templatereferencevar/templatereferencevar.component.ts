import { Component } from '@angular/core';

@Component({
  selector: 'templatereferencevar',
  templateUrl: './templatereferencevar.component.html',
})
export class TemplatereferencevarComponent {

  searchText: string = ""

  // Declaring the click event function
  onClickButton(input: HTMLInputElement) {
    this.searchText = input.value;
  }
}
