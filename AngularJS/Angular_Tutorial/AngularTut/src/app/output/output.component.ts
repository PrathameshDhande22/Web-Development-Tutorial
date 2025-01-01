import { Component } from '@angular/core';
import { Laptop, laptops } from '../../data/laptop';


export interface IFilter {
  filterType: "All" | "Intel" | "Ryzen" | "Apple",
  filtertotal: number
}

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
})
export class OutputComponent {
  listoflaptops: Laptop[] = laptops;

  numberofIntel: number = this.listoflaptops.filter((value) => {
    return value.processorCompany === "Intel";
  }).length

  numberofRyzen: number = this.listoflaptops.filter((value) => {
    return value.processorCompany === "Ryzen";
  }).length

  numberofApple: number = this.listoflaptops.filter((value) => {
    return value.processorCompany === "Apple";
  }).length

  selectedFilterButton: string = "All";

  // Event Emitter functoin to change
  onFilterChange(data: string) {
    console.log("Calling the Parent Method");
    this.selectedFilterButton = data
    if (data !== "All") {
      this.listoflaptops = laptops.filter((value) => value.processorCompany === this.selectedFilterButton)
    } else {
      this.listoflaptops = laptops
    }
  }

  filterlist: IFilter[] = [
    {
      filtertotal: this.listoflaptops.length,
      filterType: "All"
    }, {
      filtertotal: this.numberofApple,
      filterType: "Apple"
    },
    {
      filtertotal: this.numberofIntel,
      filterType: "Intel"
    }, {
      filtertotal: this.numberofRyzen,
      filterType: "Ryzen"
    }
  ]

}
