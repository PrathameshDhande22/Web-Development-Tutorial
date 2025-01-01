import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../utils/resources';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) {}

  getAllComments(){
    return this.http.get(`${API_URL}/comments`)
  }
  getCommentById(id:number){
    return this.http.get(`${API_URL}/comments/${id}`)
  }
  postComment(payload:{id:number,text:string}){
    return this.http.post(`${API_URL}/comments`,payload)
  }
}
