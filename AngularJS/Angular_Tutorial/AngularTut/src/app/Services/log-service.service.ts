import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  constructor() {}

  // creating the service with method as logmessage
  logMessage(username: string, log: 'Danger' | 'Warning' | 'Info') {
    if (log === 'Danger') {
      console.error('Something happened');
    } else if (log === 'Info') {
      console.log('username has been added => ', username);
    } else if (log === 'Warning') {
      console.warn('These is the Warning Message');
    }
  }
}
