import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pathmatch',
  imports: [],
  templateUrl: './pathmatch.html'
})
export class Pathmatch {
  private activatedroute: ActivatedRoute = inject(ActivatedRoute)
  pathroute = signal<string | null>("");

  constructor() {
    this.activatedroute.paramMap.subscribe((value) => {
      this.pathroute.set(value.get("new"))
    })
  }
}
