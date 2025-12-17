import { Component, DestroyRef, inject, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-destroyable',
  imports: [],
  templateUrl: './destroyable.html'
})
export class destroyable implements OnDestroy {
  // OnDestroy LifeCycle when the component is not shown based on any condition
  ngOnDestroy(): void {
    alert("the component has been Destroyed")
  }

  // Destroy component on DestroyRef injection
  constructor() {
    inject(DestroyRef).onDestroy(() => {
      confirm("do you want to remove the component")
    })
  }
}
