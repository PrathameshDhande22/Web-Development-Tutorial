import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ng-childcontent',
  templateUrl: './childcontent.component.html',
})
export class ChildcontentComponent implements AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @ContentChild("divcontainer")
  Container: ElementRef = undefined as any;

  @ViewChild("divchildcontainer")
  childdivContainer: ElementRef = undefined as any;

  ngOnInit() {
    console.log("ng")
    console.log("ContentChild => ", this.Container?.nativeElement)
  }

  // ngAfterContentInit Hook after the projected content has been initialized.
  ngAfterContentInit(): void {
    console.log("Content has been projected.")
    console.log("ContentChild in aftercontentinit => ", this.Container.nativeElement);

  }

  // ngAfterContentChecked will called after the ngAfterContentInit Hook and it calls every time whenever the content inside the projected components change
  ngAfterContentChecked(): void {
    console.log("AfterContent Checked Hook called");
    console.log("ContentChild in ngAfterContentChecked => ", this.Container.nativeElement);
  }

  // these hook is called one time when all the views and its child views are properly initialized in these you can get the initialized @viewchild property.
  ngAfterViewInit(): void {
    console.log("NgAfterViewInit Hook is called")
    console.log(this.childdivContainer.nativeElement)
    console.log(this.Container.nativeElement)
  }

  // Runs on every change detection cycle.
  ngAfterViewChecked(): void {
    console.log("AfterViewchecked Hoook Called");
    console.log(this.childdivContainer.nativeElement)
    console.log(this.Container.nativeElement)
  }



}
