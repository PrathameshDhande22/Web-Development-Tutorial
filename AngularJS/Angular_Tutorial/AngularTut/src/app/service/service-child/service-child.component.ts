import { Component, OnChanges } from '@angular/core';
import { SubscribeService } from '../../Services/subscribe.service';

@Component({
  selector: 'app-service-child',
  templateUrl: './service-child.component.html',
})
export class ServiceChildComponent {

  // getting the parent services in these
  public constructor(protected service: SubscribeService) {}


}
