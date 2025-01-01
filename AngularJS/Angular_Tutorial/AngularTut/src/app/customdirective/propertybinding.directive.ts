import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

interface ColorChange {
  textcolor?: string,
  bgColor?: string
}

@Directive({
  selector: '[Propertybinding]'
})
export class PropertybindingDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  // INput decorator to pass the value give the name as the same of the directive selector 
  @Input("Propertybinding")
  colorproperty: ColorChange = { textcolor: "black", bgColor: "white" }


  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'color', this.colorproperty.textcolor)
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.colorproperty.bgColor)
  }

}
