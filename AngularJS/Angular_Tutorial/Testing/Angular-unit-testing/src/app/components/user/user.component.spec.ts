/* Writing the Asynchronous Test cases */

import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from '@angular/core/testing';
import { UserComponent } from './user.component';
import { DebugElement } from '@angular/core';

describe('UserComponent', () => {
  let fixture: ComponentFixture<UserComponent>;
  let component: UserComponent;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  // using the done method specifying that the calling is done.
  it('should show username after button click', (done) => {
    const buttonele: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    buttonele.click();

    setTimeout(() => {
      expect(component.username).toBe('Ramesh Verma');
      done();
    }, 1000);
  });

  it('should show username after button click => (FakeAsync)', fakeAsync(() => {
    const buttonele: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    buttonele.click();

    // ticking the number of miliseconds
    // tick(1000);
    flush()  // waits for being empty the asyncs codes => better to use
    // another way is to use the waitForAsync function.
    expect(component.username).toBe('Ramesh Verma');
  }));
});
