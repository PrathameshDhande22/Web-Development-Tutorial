import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  providers: [SubscribeService], // provider to specify that we need to instantiate these service.
})
export class ServiceComponent {
  // using the service here
  public constructor(private service: SubscribeService) {}

  onBtnClick(inputEl: HTMLInputElement) {
    if (inputEl.value == '') {
      alert('Enter Username');
      return;
    }

    // calling the method of the service
    this.service.doSubscribe(inputEl.value);
  }
}
