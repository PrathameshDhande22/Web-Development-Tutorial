import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Textcolor } from "../../Directives/textcolor";
import { IfNot } from "../../Directives/if-not";


@Component({
  selector: 'app-directives-tut',
  imports: [NgClass, Textcolor, IfNot],  // Import the NGClass
  templateUrl: './directives-tut.html'
})
export class DirectivesTut implements OnInit {
  // set the css class based on variable
  isSpecial = true;

  isAdmin = false

  // setting the css classes using the object of string
  cssClasses: Record<string, boolean> = {}

  ngOnInit(): void {
    // setting these as the CSS classes in the NGClass
    this.cssClasses = {
      "border-black": this.isSpecial,
      "border-2": true,
      "bg-pink-300": !!this.isSpecial
    }
  }
}
