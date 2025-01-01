import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fragment',
  templateUrl: './fragment.component.html',
})
export class FragmentComponent implements OnInit {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // getting the current fragment activated in the route
    this.activeRoute.fragment.subscribe((data) => {
      this.JumpToSection(String(data));
    });
  }

  // jumping to the fragments
  JumpToSection(section: string): void {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  // navigates to up
  UpperWindow() {
    window.scrollTo({ top: 0 });
  }
}
