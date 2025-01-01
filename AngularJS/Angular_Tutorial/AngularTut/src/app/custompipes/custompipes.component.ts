import { Component, OnInit } from '@angular/core';
import { MasksensitivePipe } from './masksensitive.pipe';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'custompipes',
  templateUrl: './custompipes.component.html',
  providers: [MasksensitivePipe],
})
export class CustompipesComponent implements OnInit {
  email: string = 'prathamesh@gmail.com';
  phoneno: number = 1234567890;
  altemail: string = 'prashant@gmail.com';

  public constructor(private mask: MasksensitivePipe) {}
  ngOnInit(): void {
    // using the pipes in the ts file
    this.altemail = this.mask.transform(this.altemail, 'email');
  }
}
