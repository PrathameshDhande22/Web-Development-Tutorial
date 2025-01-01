import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[hostbinding]'
})
export class HostbindingDirective {

  constructor(private element: ElementRef) { }

  // Hosting binding decorator will apply the property to the host.
  @HostBinding('style.backgroundColor') backgroundcolor: string = "red";

  @HostBinding('attr.data-value') value:string="prathamesh"
}
