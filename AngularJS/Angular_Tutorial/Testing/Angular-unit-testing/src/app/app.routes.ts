import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CommentComponent } from './components/comment/comment.component';

export const routes: Routes = [
    { path: 'about', component: UserComponent },
    { path: '', component: CommentComponent },
];
