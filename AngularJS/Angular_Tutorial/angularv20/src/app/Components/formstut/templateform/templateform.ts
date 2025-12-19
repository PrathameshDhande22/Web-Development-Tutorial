import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface UserFeedback {
  firstname: string
  lastname: string
  rating: number
  likedmost: string
}

@Component({
  selector: 'app-templateform',
  imports: [FormsModule, TitleCasePipe],
  templateUrl: './templateform.html',
})
export class Templateform {
  likedMost: string[] = ["bus", "cab", "biketaxi", "faketaxi"]

  userfeedback: UserFeedback = {
    firstname: "Rambo",
    lastname: "Nani",
    likedmost: this.likedMost[2],
    rating: 2
  }

  submitted = false;

  submit() {
    this.submitted = true
  }
}
