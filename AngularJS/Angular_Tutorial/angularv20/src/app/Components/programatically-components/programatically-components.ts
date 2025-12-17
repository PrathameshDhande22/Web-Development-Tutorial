import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, viewChild, ViewContainerRef } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-admin',
  template: `<div class="bg-amber-300 border-2 text-center border-cyan-500 rounded-3xl">Admin</div>`
})
export class AdminComponent { }

@Component({
  selector: 'app-developer',
  template: `<div class="bg-purple-200 border-2 text-center border-red-500 rounded-3xl">Developer</div>`
})
export class DeveloperComponent { }


@Component({
  selector: 'app-programatically-components',
  imports: [NgComponentOutlet],
  preserveWhitespaces: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './programatically-components.html'
})
export class ProgramaticallyComponents {

  selectedRole: "admin" | "developer" = "developer"
  containerRef = viewChild("container", { read: ViewContainerRef })

  // inject the viewcontainer REf
  viewcontainerRef = inject(ViewContainerRef)

  // inject the ChangeDetection REf
  changeDetectionRef = inject(ChangeDetectorRef)

  // Render the component based on the input got from the user
  getComponent(): typeof AdminComponent | typeof DeveloperComponent {
    return this.selectedRole === "admin" ? AdminComponent : DeveloperComponent
  }

  displayContainer(toDisplay: boolean) {
    // Createing the component for the passed container
    if (toDisplay)
      this.containerRef()?.createComponent(AdminComponent);
    else
      this.containerRef()?.clear()
  }

  loadContent() {
    this.viewcontainerRef.createComponent(DeveloperComponent)
  }

  markasChecked() {
    this.changeDetectionRef.markForCheck()
  }
}
