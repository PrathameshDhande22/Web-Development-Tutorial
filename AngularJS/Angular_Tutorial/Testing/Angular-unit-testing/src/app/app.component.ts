import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentComponent } from './components/comment/comment.component';
import { UserComponent } from './components/user/user.component';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-new-prep';
}
