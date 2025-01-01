import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  searchText: string = ""

  // passing the data from the 
  @Output()
  SearchedText: EventEmitter<string> = new EventEmitter<string>()

  // emmiting the event
  onInputChange() {
    this.SearchedText.emit(this.searchText)
  }
}
