import { Directive, ElementRef, HostListener, inject, input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextcolor]',
})
export class Textcolor implements OnInit {
  // inject the elementRef to get the direct access to the DOM Element
  elementRef = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>)

  // binding the input the name must be same as the directive
  appTextcolor = input<string>();

  // adding the another binding to the directive
  hoverColor = input.required<string>()

  // After rendered the component or directive then change the color
  ngOnInit(): void {
    this.elementRef.nativeElement.style.color = this.appTextcolor() ?? "";
  }

  // applying the Host Binding
  @HostListener("mouseenter")
  changeColorOnHover() {
    console.log("color changed to ", this.hoverColor())
    this.elementRef.nativeElement.style.color = this.hoverColor()
  }

}
