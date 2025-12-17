import { Component, inject } from '@angular/core';
import { Authservice, UserData } from '../../Services/authservice';
import { FormsModule } from "@angular/forms";
import { NavigationStart, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-guardstut',
  imports: [FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './guardstut.html'
})
export class Guardstut {
  usernameform = ""
  passwordform = ""
  userdata: UserData | undefined = undefined;
  router: Router = inject(Router)

  authService: Authservice = inject(Authservice)

  doLogin() {
    this.userdata = this.authService.loginUser({
      password: this.passwordform,
      username: this.usernameform
    })
    console.log(this.userdata)
    if (!this.userdata) {
      alert("User Not Found")
    }
  }

  constructor() {
    this.router.events.subscribe(((value) => {
      if (value instanceof NavigationStart) {
        console.log("Navigation Started")
      }
    }))
  }
}
