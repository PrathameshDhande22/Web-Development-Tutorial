import { Component, inject, OnInit } from '@angular/core';
import { Trial } from '../../../Services/trial';
import { JsonPipe } from '@angular/common';
import { APP_CONFIG_VAR, AppConfigVars } from '../../../app.config';

@Component({
  selector: 'app-instance-service',
  imports: [JsonPipe],
  // get the service instance 
  providers: [
    { provide: Trial, useClass: Trial }
  ],
  templateUrl: './instance-service.html'
})
export class InstanceService implements OnInit {
  // inject the Service
  trailservice: Trial = inject(Trial)
  appconfigvar: AppConfigVars = inject<AppConfigVars>(APP_CONFIG_VAR);

  ngOnInit(): void {
    this.trailservice.setData = { name: "Instance Service", dateofbirth: "2003-04-23" }
  }
}
