import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarBookingService } from '../shared/car-booking.service';
import { CarBookingInfo } from '../shared/car-booking-info';
import { Location } from '@angular/common';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  public bookingInfo: CarBookingInfo;

  constructor(
    private router: Router,
    private location: Location,
    private carBookingService: CarBookingService
  ) {
    if (this.carBookingService.currentCarBooking && this.carBookingService.currentCarBooking.carId) {
      this.bookingInfo = this.carBookingService.currentCarBooking;
    } else {
      this.router.navigate(['car-booking/selection']);
    }
  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.router.navigate(['car-booking/finish']);
  }

}
