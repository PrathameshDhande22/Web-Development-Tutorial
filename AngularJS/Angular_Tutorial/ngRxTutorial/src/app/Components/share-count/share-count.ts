import { Component, inject, Signal } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-share-count',
  imports: [],
  templateUrl: './share-count.html'
})
export class ShareCount {
  private readonly store: Store<{ count: number }> = inject(Store)
  count: Signal<number> = this.store.selectSignal((state) => state.count)
}
