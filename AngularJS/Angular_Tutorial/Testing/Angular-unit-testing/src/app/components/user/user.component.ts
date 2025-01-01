import { Component, Input } from '@angular/core';
import { FormatMobPipe } from '../../pipes/format-mob.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormatMobPipe,HighlightDirective],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   username = ""
   phone = 1234567890
   status = "Single"

   showUserName(){
    setTimeout(()=>{
      this.username = "Ramesh Verma"
    },1000)

    // Promise.resolve().then(()=>{
    //   this.username = "Ramesh Verma"
    // })

    // ajax("https://jsonplaceholder.typicode.com/users")
    // .subscribe((data:any)=>{
    //   this.username = data.response[0].name
    // })


   }

}
