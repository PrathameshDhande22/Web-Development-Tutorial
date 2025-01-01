import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[structural]'
})
export class StructuralDirective {


  constructor(private template: TemplateRef<any>, private viewcontainer: ViewContainerRef) { }

  @Input("structural")
  set showafterdelay(seconds: boolean) {
    if (seconds) {
      this.viewcontainer.createEmbeddedView(this.template)
    } else {
      this.viewcontainer.clear();
    }
  }


}
