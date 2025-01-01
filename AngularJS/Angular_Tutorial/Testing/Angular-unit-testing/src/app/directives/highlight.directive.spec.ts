/* Writing the test cases on Directives */

import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// creating the dummy component
@Component({
  selector: 'test-comment',
  standalone: true,
  imports: [HighlightDirective],
  template: ` <div appHighlight>Testing Component</div> `,
})
class TestComponent {}

describe('HighLightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let divele: HTMLDivElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    divele = fixture.nativeElement.querySelector('div');
    fixture.detectChanges();
  });

  it('Should have red Bg Color', () => {
    expect(divele.style.backgroundColor).toEqual('red');
  });

  it('Should increase fontsize when mouse enter', () => {
    divele.dispatchEvent(new Event('mouseenter'));
    expect(divele.style.fontSize).toBe('30px');
  });

  it('Should reset fontsize when mouse leave', () => {
    divele.dispatchEvent(new Event('mouseleave'));
    expect(divele.style.fontSize).toBe('20px');
  });
});
