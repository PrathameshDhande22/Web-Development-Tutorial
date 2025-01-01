import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hostlistener]'
})
export class HostlistenerDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  // using the hostlistner on host
  @HostListener("mouseenter")
  onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, "background-color", "yellow")
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, "background-color", "transparent")
  }
}
