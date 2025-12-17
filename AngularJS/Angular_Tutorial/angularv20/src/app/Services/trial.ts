import { Injectable } from '@angular/core';

// Creating the service which will be injected at the application startup 
@Injectable({
  providedIn: 'root',
})
export class Trial {
  private trailData: Record<string, string>;

  public constructor() {
    this.trailData = {
      name: "john",
      dateofbirth: "22-04-2004"
    }
  }

  get getData(): Record<string, string> {
    return this.trailData
  }

  set setData(value: Record<string, string>) {
    this.trailData = value
  }

  hasunsavedChanges() {
    return true;
  }
}
