import { afterEveryRender, Component, ElementRef, inject, Renderer2 } from '@angular/core';
import { CustomChildRef } from "../custom-child-ref/custom-child-ref";

@Component({
  selector: 'app-dom-api',
  imports: [CustomChildRef],
  templateUrl: './dom-api.html'
})
export class DomApi {
  // Accessing the Component Element ideally from the Template
  elementRef: ElementRef<HTMLDivElement> = inject(ElementRef<HTMLDivElement>)

  // INjecting the Renderer2 which is safe
  renderer2 = inject(Renderer2)

  constructor() {
    // Here we are chaning the dom or even dom manipulation is possible
    afterEveryRender(() => {
      this.elementRef.nativeElement.querySelector<HTMLInputElement>(".text-name")?.focus()

      // safer dom manipulation
      this.renderer2.addClass(this.elementRef.nativeElement, "custom-class")
    })
  }
}
