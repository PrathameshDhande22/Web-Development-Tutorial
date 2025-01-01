import { Component, inject, OnInit } from '@angular/core';
import { LaptopService } from '../Services/laptop.service';
import { Laptop } from '../../data/laptop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'query-string',
  templateUrl: './query-string.component.html',
})
export class QueryStringComponent implements OnInit {
  private laptopService: LaptopService = inject(LaptopService);
  private activatedRouter: ActivatedRoute = inject(ActivatedRoute);
  private route: Router = inject(Router);

  public listoflaptops: Laptop[] = this.laptopService.Laptops;
  public brandNames: Set<string> = new Set<string>();
  public storageType: Set<string> = new Set<string>();
  public brand: string = '';
  public storage: string = '';

  ngOnInit(): void {
    this.listoflaptops.forEach((value) => {
      this.brandNames.add(value.processorCompany);
      this.storageType.add(value.storageType);
    });

    // getting the query parameter
    this.activatedRouter.queryParamMap.subscribe((data) => {
      this.brand = String(data.get('brand'));
      this.storage = String(data.get('storage'));

      if (this.brand !== 'null' && this.brand !== '') {
        this.listoflaptops = this.laptopService.Laptops.filter(
          (value) => value.processorCompany === this.brand
        );
      }

      if (this.storage !== 'null' && this.storage !== '') {
        this.listoflaptops = this.listoflaptops.filter(
          (value) => value.storageType === this.storage
        );
      }
    });
  }

  OnChangeSelect(storageEle: HTMLSelectElement, brandEle: HTMLSelectElement) {
    // assigning the query parameters programatically
    this.route.navigate(['routes', 'querystring'], {
      queryParams: { storage: storageEle.value, brand: brandEle.value },
    });
  }

  OnClearFilters() {
    this.route.navigate(['routes', 'querystring']);
    this.listoflaptops = this.laptopService.Laptops;
  }
}
