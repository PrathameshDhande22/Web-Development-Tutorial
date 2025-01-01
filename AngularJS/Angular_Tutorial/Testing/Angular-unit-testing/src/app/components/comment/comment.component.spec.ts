// creating or writing the test cases for components

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentComponent } from './comment.component';
import { CommentsService } from '../../services/comments.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

/* While Writing the Testing remember we don't need to call the function instead we need to spy or mock the values. */

describe('CommentComponent', () => {
  let commentService: jasmine.SpyObj<CommentsService>;
  let fixture: ComponentFixture<CommentComponent>;
  let component: CommentComponent;
  let debugEle: DebugElement;

  beforeEach(async () => {
    // the component is using the comment service
    const commspy = jasmine.createSpyObj<CommentsService>('CommentsService', [
      'getAllComments',
      'postComment',
    ]);

    await TestBed.configureTestingModule({
      providers: [{ provide: CommentsService, useValue: commspy }],
      // using the comment component
      imports: [CommentComponent],
    }).compileComponents();

    // service
    commentService = TestBed.inject(
      CommentsService
    ) as jasmine.SpyObj<CommentsService>;

    fixture = TestBed.createComponent(CommentComponent);
    // creating the instance of the component
    component = fixture.componentInstance;

    // using debug element
    debugEle = fixture.debugElement;
  });

  //
  it('should have input and button present', () => {
    let nativele: HTMLDivElement = fixture.nativeElement;

    // expecting the element as div
    expect(fixture.nativeElement).toBeInstanceOf(HTMLDivElement);

    // checking if the input is present
    expect(nativele.querySelector('input'))
      .withContext('Select Element is present')
      .toBeTruthy();

    // here we have used the native javascript method like querySelector we can use the jasmine method instead
    expect(debugEle.query(By.css('button')).nativeElement).toBeTruthy();
  });

  it('Should Load Comments on Initalization', () => {
    // returning these data
    const comments = [
      {
        id: '1',
        text: 'a comment about post 1',
      },
      {
        id: '2',
        text: 'another comment about post 1',
      },
    ];

    // mocking these method
    commentService.getAllComments.and.returnValue(of(comments));

    // triggering the angular change detection
    fixture.detectChanges();

    expect(debugEle.queryAll(By.css('li')).length).toBe(2);
  });

  it('Should show alert if comment text is empty on submission', () => {
    // keeping the spy on alert if it gets called.
    spyOn(window, 'alert');

    // setting the text of the component.
    component.text = '';

    component.handleSubmit();

    expect(window.alert).toHaveBeenCalledOnceWith('Please add a comment');

    expect(commentService.postComment).not.toHaveBeenCalled();
  });

  it('should add comment on ui when user types and click on post button', () => {
    // mocking the data
    commentService.getAllComments.and.returnValue(of([]));
    fixture.detectChanges();

    commentService.postComment.and.returnValue(
      of({
        id: 1,
        text: 'Mock data using Test',
      })
    );

    spyOn(Date, 'now').and.returnValue(1);

    // simpulate user typing a comment
    const inputele: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    // Adding the new Comment
    inputele.value = 'New Comment By Test';

    // trigger the input element
    inputele.dispatchEvent(new Event('input'));

    // simulate user clicking on button
    const buttonele: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    buttonele.click();
    fixture.detectChanges();

    const commentslielement = fixture.nativeElement.querySelectorAll('li');

    expect(commentslielement.length).toBe(1);
  });
});
