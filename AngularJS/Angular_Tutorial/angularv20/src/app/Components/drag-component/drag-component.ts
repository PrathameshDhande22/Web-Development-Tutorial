import { Component } from '@angular/core';
import { CdkDrag } from "@angular/cdk/drag-drop"

@Component({
  selector: 'app-drag-component',
  imports: [CdkDrag],
  templateUrl: './drag-component.html',
})
export class DragComponent {

}
