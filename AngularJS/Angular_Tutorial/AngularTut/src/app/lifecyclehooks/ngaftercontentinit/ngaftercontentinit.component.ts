import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'ngaftercontentinit',
  templateUrl: './ngaftercontentinit.component.html',
})
export class NgaftercontentinitComponent implements AfterViewInit {
  message: string = ""

  ngOnInit() {
    console.log("OnInit hook Called")
  }

  ngAfterViewInit(): void {
    console.log("Afteviewinit is called in parent component");

  }

  onBtnClick() {
    this.message = "Random"
  }
}
