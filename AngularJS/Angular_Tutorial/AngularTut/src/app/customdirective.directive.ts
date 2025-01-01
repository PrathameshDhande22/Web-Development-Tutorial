import { Directive, ElementRef, OnInit, Renderer2, RendererStyleFlags2 } from '@angular/core';

@Directive({
  selector: '[customdir]' // attribute directive must be wrapped inside the square brackets
})
export class CustomdirectiveDirective implements OnInit {

  // every time when we add the directive into the element or component we are going to get or it will create the new instance of the directive in which we can access the element as the property which angular injects it through dependency injection. 
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  // on init it will call these function and set the properties on the element
  ngOnInit(): void {
    // in these we were directly setting the DOM properties and these are prone to attacks
    let divEl: HTMLDivElement = this.element.nativeElement;
    divEl.style.color = "red"
    divEl.style.backgroundColor = "yellow"
    divEl.style.marginTop = "20px"

    // using renderer2 class instead of directly manipulating the DOM element
    this.renderer.createText("Changes using Renderer2 class")
    this.renderer.setStyle(this.element.nativeElement, "background-color", "lightgreen")
  }
}
