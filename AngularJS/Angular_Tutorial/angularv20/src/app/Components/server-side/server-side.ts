import { Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-server-side',
  imports: [],
  templateUrl: './server-side.html',
  // Skip the hydration for these component
  host: {
    ngSkipHydration: 'true'
  }
})
export class ServerSide {
  metaservice = inject(Meta)

  constructor() {
    this.metaservice.addTag({
      name: "title",
      content: "These is tthe Server side Rendering"
    })
  }

}
