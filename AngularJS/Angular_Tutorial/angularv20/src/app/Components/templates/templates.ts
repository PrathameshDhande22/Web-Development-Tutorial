import { NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, Component, inject, TemplateRef, viewChild, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomChild } from '../custom-child/custom-child';

interface ContextObject {
  userobject: string
}

@Component({
  selector: 'app-templates',
  imports: [FormsModule, NgTemplateOutlet, CustomChild],
  templateUrl: './templates.html'
})
export class Templates implements AfterViewInit {
  // Rendering these dynamic text in the template
  public customername = "prathamesh"

  public keyPressed = ""

  // whenever input changes in the text field these variable will also get changed. 
  public subjectName = "physics"

  public a = 10
  public b = 13

  public listoffruits = ["apple", "banana", "grapes", "papaya", "chickoo"]

  // getting the reference of the template reference
  public templateref = viewChild.required<TemplateRef<unknown>>("templatecontainer")

  // rendering the template using ViewContainerRef
  private viewcontainerref = inject(ViewContainerRef)

  // parameterized template reference
  public parameterizedTemplate = viewChild.required<TemplateRef<ContextObject>>("parameterTemplate")

  ngAfterViewInit(): void {
    // passing the template value via context object. 
    this.viewcontainerref.createEmbeddedView(this.parameterizedTemplate(), {
      userobject: "dhande prathamesh"
    })
  }

  renderTemplate() {
    this.viewcontainerref.createEmbeddedView(this.templateref())
  }

  // invoked when key are up
  onKeyUp(ev: KeyboardEvent) {
    this.keyPressed = ev.key
  }

  onControl() {
    alert("Specified action takes place")
  }
}
