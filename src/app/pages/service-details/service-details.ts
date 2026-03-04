import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../../models/booking.model';
import { Auth } from '../../services/auth';
import { Bookingservice } from '../../services/bookingservice';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './service-details.html',
  styleUrl: './service-details.css',
})
export class ServiceDetails implements OnInit {

  serviceId: string | null = null;
  serviceName: string | null = null;

  bookingForm;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private bookingService: Bookingservice,
    private router: Router,
    public auth: Auth
  ){
    this.bookingForm = this.fb.group({
      customerName: ['', Validators.required],
      date: ['', Validators.required]
    });
  }
  ngOnInit(){
      this.serviceId = this.route.snapshot.paramMap.get('id');
      this.serviceName = this.route.snapshot.paramMap.get('name');
    }

  bookService(){
      if (!this.auth.isLoggedIn()){
        alert("please login first");
        this.router.navigate(['/login']);
        return;
      }

      if(this.bookingForm.invalid) return;


      const booking: Booking = {
        id: Date.now(),
        serviceName: this.serviceName || '',
        customerName: this.bookingForm.value.customerName!,
        date: this.bookingForm.value.date!,
        status: "Confirmed"
      };

      this.bookingService.addBooking(booking);
      alert("Booking Confirmed");
      this.router.navigate(['/bookings']);
  }
}
