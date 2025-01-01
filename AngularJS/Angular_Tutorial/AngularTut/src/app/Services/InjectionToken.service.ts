import { inject, Injectable } from '@angular/core';
import { LogService } from './log-service.service';
import { API_URL } from '../app.module';

@Injectable({
  providedIn: 'root',
})
export class InjectionTokenService {
  constructor() {}

  // using the log service without initializing it in the constructor
  private logservice: LogService = inject(LogService);
  private api_url: string = inject(API_URL);

  getComments(): Promise<any> {
    return fetch(this.api_url, { method: 'GET' });
  }
}
