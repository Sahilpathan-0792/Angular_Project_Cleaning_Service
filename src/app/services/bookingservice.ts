import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root',
})
export class Bookingservice {
  private bookings: Booking[] = [];

  constructor(private auth: Auth) {}

  getBookings(): Booking[] {
    return this.bookings;
  }

  addBooking(booking: Booking){
    this.bookings.push(booking);
  }

  deleteBooking(index: number){
    this.bookings.splice(index,1);
  }
  
}
