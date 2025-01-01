import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Services } from '../../Interfaces/Services';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  imports: [NgFor, CardComponent],
  templateUrl: './home.component.html',
  styles: ``,
  standalone: true
})
export class HomeComponent {
  listofname: string[] = ["Prathamesh", "John", "Wick", "Yash"]
  services: Services[] = [
    {
      title: "Web Development",
      description: "Building responsive and high-performance websites tailored to your business needs."
    },
    {
      title: "Mobile App Development",
      description: "Designing and developing native and cross-platform mobile applications for a seamless user experience."
    },
    {
      title: "Digital Marketing",
      description: "Enhancing your online presence with SEO, social media strategies, and content marketing."
    },
    {
      title: "Cloud Solutions",
      description: "Providing scalable cloud services, including AWS, Azure, and Google Cloud, for enhanced business agility."
    },
    {
      title: "UI/UX Design",
      description: "Creating user-friendly and aesthetically pleasing designs to improve user interaction and satisfaction."
    },
    {
      title: "Data Analytics",
      description: "Leveraging data to gain insights and make informed decisions that drive business growth."
    }
  ];


}
