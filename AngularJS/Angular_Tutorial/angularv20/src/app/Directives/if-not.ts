import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]'
})
export class IfNot {
  // INject the template ref and container view ref
  templateRef = inject(TemplateRef)
  containerRef = inject(ViewContainerRef)

  // set the input using setter
  @Input() set appIfNot(condition: boolean) {
    // Clear any previously rendered views
    this.containerRef.clear();

    // Render only if condition is false
    if (!condition) {
      this.containerRef.createEmbeddedView(this.templateRef);
    }
  }
}
