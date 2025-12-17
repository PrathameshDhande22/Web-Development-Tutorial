import { Component, EnvironmentInjector, inject, runInInjectionContext } from '@angular/core';
import { Trial } from '../../Services/trial';
import { JsonPipe } from '@angular/common';
import { InstanceService } from './instance-service/instance-service';
import { Apiservice } from '../../Services/apiservice';

// some utility function but want to run in the injection context
export function getMockData() {
  return inject(Apiservice).getMockData;
}

@Component({
  selector: 'app-services-tut',
  imports: [JsonPipe, InstanceService],
  templateUrl: './services-tut.html'
})
export class ServicesTut {
  // injecting the Service
  trailService: Trial = inject(Trial)
  injector = inject(EnvironmentInjector);

  show() {
    // run these method in injectioncontext
   return runInInjectionContext(this.injector, () => {
      return getMockData()
    })
  }
  // you can also get the service using constructor
  // public constructor(private anotherTrailService: Trial) { }
}
