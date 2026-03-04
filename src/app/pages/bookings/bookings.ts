import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { Bookingservice } from '../../services/bookingservice';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-bookings',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './bookings.html',
  styleUrl: './bookings.css',
})
export class Bookings implements OnInit {

  bookings: Booking[] = [];

  constructor(
    private bookingService: Bookingservice,
    public auth: Auth
  ) {}

  ngOnInit() {
    this.loadBookings();
  }

  loadBookings() {
    this.bookings = this.bookingService.getBookings();
  }

  cancelBooking(index: number) {
    if(!this.auth.isLoggedIn()) {
      alert("Login Required");
      return;
    }

    this.bookingService.deleteBooking(index);
    this.loadBookings();
  }
}