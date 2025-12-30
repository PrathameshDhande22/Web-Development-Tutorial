import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  imports: [RouterLink, RouterLinkActive],
  styleUrl: './header.css'
})
export class Header {

}
