import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'ngondestory',
  templateUrl: './ngondestory.component.html',
})
export class NgondestoryComponent implements OnInit {
  public toDestroy: boolean = false

  ngOnInit(): void {
    console.log("these is the OnInit hook of Destroycomponent")
  }



  DestroyComponent() {
    this.toDestroy = !this.toDestroy
  }

}
