import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[conditionalattr]'
})
export class ConditionalattrDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  // Rendering something based on conditions.
  @Input("conditionalattr")
  set RenderElement(value: boolean) {
    if (value) {
      this.renderer.setStyle(this.element.nativeElement, 'background-color', 'lightgrey');
    }
  }
}
