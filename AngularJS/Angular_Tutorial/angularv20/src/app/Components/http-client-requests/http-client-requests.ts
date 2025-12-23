import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { CACHING_CONTEXT } from '../../httpcontext';

interface User {
  id: number
  firstName: string
  lastName: string
}

interface UsersResponse {
  users: User[]
  total: number
  skip: number
  limit: number
}

@Component({
  selector: 'app-http-client-requests',
  imports: [],
  templateUrl: './http-client-requests.html',
})
export class HttpClientRequests implements OnInit {
  // injecting the http client for making requests
  private httpclient = inject(HttpClient)
  users = signal<User[]>([])

  ngOnInit(): void {
    // creating the parameters
    const httpparams = new HttpParams().append("limit", 10).append("skip", 10)

    // get request with parameters
    this.httpclient.get<UsersResponse>("https://dummyjson.com/users", {
      params: httpparams,
      // setting the context token inside the httpcontext
      context: new HttpContext().set(CACHING_CONTEXT, true)
    }).subscribe((data) => {
      this.users.set(data.users)
    })
  }
}
