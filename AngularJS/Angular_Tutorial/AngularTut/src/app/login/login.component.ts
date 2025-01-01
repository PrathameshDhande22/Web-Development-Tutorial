import {
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent {
  @ViewChild('usernamebox')
  usernameEle: ElementRef = null as any;

  @ViewChild('passwordbox')
  passwordEle: ElementRef = null as any;

  authservice: AuthService = inject(AuthService);

  onsubmit(event: Event) {
    event.preventDefault();
    if (
      this.usernameEle.nativeElement?.value &&
      this.passwordEle.nativeElement?.value
    ) {
      if (
        this.authservice.login(
          this.usernameEle.nativeElement?.value,
          this.passwordEle.nativeElement?.value
        )
      ) {
        alert('Welcome ' + this.usernameEle.nativeElement?.value);
        return;
      }
      alert('No Userfound');
      return;
    }
    alert('Enter The credentials');
  }
}
