import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { usercollectionSelector } from '../../Store/Books/books.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  imports: [RouterLink, RouterLinkActive],
  styleUrl: './header.css',
})
export class Header {
  private store = inject(Store);
  private usercollectionselector = this.store.selectSignal(usercollectionSelector);

  get userCollectionCount(): number {
    return this.usercollectionselector().length;
  }
}
