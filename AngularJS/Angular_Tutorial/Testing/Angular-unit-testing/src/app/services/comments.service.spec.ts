import { TestBed } from '@angular/core/testing';
import { CommentsService } from './comments.service';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import COMMENTDATA from '../../../db.json';
import { API_URL } from '../utils/resources';

/* Testing Service with HttpClient  */

// Test Cases for Comments Service
describe('CommentsService', () => {
  let commService: CommentsService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    // creating the dependency injection for http client
    TestBed.configureTestingModule({
      providers: [
        CommentsService,
        // providing the httpclient for testing
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    commService = TestBed.inject(CommentsService);
    // mocking the api calls. we are not making the api calls.
    httpTesting = TestBed.inject(HttpTestingController);
  });

  // aftereach test case these block will call
  afterEach(() => {
    httpTesting.verify();
  });

  it('Should Give all comments', () => {
    // getting the first two comments only
    const commentData = COMMENTDATA.comments.slice(0, 2);

    commService.getAllComments().subscribe((data: any) => {
      // expects the value as thruthy
      expect(data).toBeTruthy();

      // checking the length
      expect(data.length).withContext('Should have 2 Comments').toBe(2);
    });

    // flushing the request
    const req = httpTesting.expectOne(`${API_URL}/comments`);
    // expecting the get request from the api call
    expect(req.request.method).toEqual('GET');
    // providing the dummy data
    req.flush(commentData);
  });

  it('Should Give Comment by ID', () => {
    const commentData = COMMENTDATA.comments.slice(0, 2);
    const ID = 1;

    commService.getCommentById(ID).subscribe((data: any) => {
      expect(data).toBeTruthy();
      expect(data.id).toEqual('1');
    });

    const req = httpTesting.expectOne(`${API_URL}/comments/${ID}`);
    expect(req.request.method).toEqual('GET');
    req.flush(commentData[0]);

    // verifies that at a one request should be hitted
    httpTesting.verify();
  });

  it('Should save a comment', () => {
    const commentdata = {
      id: 10,
      text: 'Comment Added By Testing',
    };

    commService.postComment(commentdata).subscribe((data: any) => {
      expect(data).toBeTruthy();
      expect(data.text).toEqual(commentdata.text);
    });

    const req = httpTesting.expectOne(`${API_URL}/comments`);
    expect(req.request.method).toEqual('POST');
    req.flush(commentdata);
  });

  it('Should give error if save a comment fails', () => {
    const commentdata = {
      id: 10,
      text: 'Comment Added By Testing',
    };

    commService.postComment(commentdata).subscribe({
      next: (data: any) => {
        // Failing the function
        fail('Save Comment should have failed');
      },
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
      },
    });

    const req = httpTesting.expectOne(`${API_URL}/comments`);
    expect(req.request.method).toEqual('POST');

    // failing the request
    req.flush(commentdata, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  });
});
