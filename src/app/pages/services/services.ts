import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services',
  imports: [CommonModule,RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

  services: Service[]= [
    {
      "id": 1,
      "name": "Home Cleaning",
      "price": 1500,
      "description": "Complete deep cleaning for your entire home",
      "image": "assets/homecleaning.jpg"
    },
    {
      "id": 2,
      "name": "AC Repair",
      "price": 500,
      "description": "Professional air conditioning repair services",
      "image": "assets/acrepair.jpg"
    },
    {
      "id": 3,
      "name": "Plumbing Services",
      "price": 3000,
      "description": "Fix leakage, pipe installation & maintenance",
      "image": "assets/plumbing.jpg"
    },
    {
      "id": 4,
      "name": "Electrician Services",
      "price": 3000,
      "description": "Complete electrician services for your home",
      "image": "assets/electrician.jpg"
    },
    {
      "id": 5,
      "name": "Pest Control",
      "price": 1200,
      "description": "Comprehensive pest control for insects, termites, and rodents",
      "image": "assets/pestcontrol.jpg"
    },
    {
      "id": 6,
      "name": "Carpentry Services",
      "price": 800,
      "description": "Expert furniture repair, assembly, and custom woodwork",
      "image": "assets/carpetcleaning.png"
    }
]
}
