import { Component, DoCheck, OnChanges } from '@angular/core';
import { SubscribeService } from '../../Services/subscribe.service';

@Component({
  selector: 'service-sibling',
  templateUrl: './service-sibling.component.html',
})
export class ServiceSiblingComponent implements DoCheck {

  public usernname: string = ""
  public constructor(private service: SubscribeService) {

  }

  ngDoCheck(): void {
    // accessing the value stored in the service
    this.usernname = this.service.loginusername
  }


}
