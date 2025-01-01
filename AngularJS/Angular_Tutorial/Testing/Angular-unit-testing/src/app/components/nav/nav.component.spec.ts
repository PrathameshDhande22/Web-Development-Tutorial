/* Writing the test cases for the Navigation and routing */

import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { provideRouter, Router, RouterLink } from '@angular/router';
import { routes } from '../../app.routes';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NavComponent', () => {
  let fixture: ComponentFixture<NavComponent>;
  let debugEle: DebugElement;
  let component: NavComponent;
  let router: Router;
  let linkDes: DebugElement[];
  let routerlinks: RouterLink[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponent],

      // configuring the test for router
      providers: [
        provideRouter(routes),
        // to call the change detection cycle automatically but it may not work on complex component.
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);

    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    debugEle = fixture.debugElement;

    // getting the element by the directive
    linkDes = debugEle.queryAll(By.directive(RouterLink));

    // getting all the router links
    routerlinks = linkDes.map((link) => link.injector.get(RouterLink));
    fixture.detectChanges();
  });

  it('Should Have 2 Routes', () => {
    expect(routerlinks.length).toBe(2);
    expect(routerlinks[0].href).toBe('/');
    expect(routerlinks[1].href).toBe('/about');
  });
});


// generating the code coverage report
/*
To Generate the code coverage report which will generate the coverage report
ng test --no-watch --code-coverage


*/
