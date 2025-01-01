import { Component, inject } from '@angular/core';
import { InjectionTokenService } from '../Services/InjectionToken.service';

@Component({
  selector: 'app-injectiontoken',
  templateUrl: './injectiontoken.component.html',
})
export class InjectiontokenComponent {
  // getting the service by inject function
  injectionservice: InjectionTokenService = inject(InjectionTokenService);

  comments: any[] = [];

  onBtnClick() {
    this.injectionservice.getComments().then((value) => {
      value.json().then((value: any) => {
        this.comments = value?.comments;
      });
    });
  }
}
