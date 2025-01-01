import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Commnet } from '../../models/Comment';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit {
  allComments:Commnet[] = []
  text="";
  constructor(private commentsService:CommentsService){}

  ngOnInit(): void {
   this.loadComments()
  }

  handleChange(e:Event){
    this.text = (e.target as HTMLInputElement).value;
  }

  handleSubmit(){
    if(!this.text){
      alert("Please add a comment")
      return
    }
    this.commentsService.postComment({
      id: Date.now(),
      text:this.text
    }).subscribe((result:any)=>{
      this.allComments.push(result)
      this.text=""
    })
  }
  
  loadComments(){
    this.commentsService.getAllComments().subscribe((data: any)=>{
      this.allComments = data
    })
  }

  

}
