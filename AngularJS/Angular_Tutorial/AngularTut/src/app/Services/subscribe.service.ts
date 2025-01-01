import { Injectable } from '@angular/core';
import { LogService } from './log-service.service';

// dependency injection
@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  public loginusername: string = '';

  // Injecting the Service from another service
  constructor(private logger: LogService) {}

  // Creating the function inside the servie
  doSubscribe(uname: string) {
    this.loginusername = uname;
    alert('You Have Subscribed');

    // using the method of another service.
    this.logger.logMessage(uname, 'Info');
  }
}
