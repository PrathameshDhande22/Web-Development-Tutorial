import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaptopService } from '../../Services/laptop.service';

@Component({
  selector: 'router-tut',
  templateUrl: './router-tut.component.html',
})
export class RouterTutComponent implements OnInit {
  public laptopIndex: number[] = [];

  public constructor(
    public activatedRoute: ActivatedRoute,
    private route: Router,
    public laptopService: LaptopService
  ) {}

  onBtnNavigate() {
    // When clicked navigating to the specified url using navigate method.
    this.route.navigate(['binding']);
  }

  onBtnNavigateByUrl() {
    // when clicked navigate to the specified url using navigate by url method.
    this.route.navigateByUrl('/directive');
  }

  ngOnInit(): void {
    this.laptopService.Laptops.map((value, index) => {
      this.laptopIndex.push(index);
    });
  }

  onSelectChange(selectEl: HTMLSelectElement) {
    this.route.navigate(['routes', 'routeparam', selectEl.value]);
  }
}
