import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CarBookingInfo } from '../shared/car-booking-info';
import { CarBookingService } from '../shared/car-booking.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  public formModel: CarBookingInfo;
  public dateTimeSettings: any = this.carBookingService.dateTimeSettings;

  constructor(
    private router: Router,
    private location: Location,
    private carBookingService: CarBookingService
  ) {
    if (this.carBookingService.currentCarBooking && this.carBookingService.currentCarBooking.carId) {
      this.formModel = this.carBookingService.currentCarBooking;
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
    this.carBookingService.currentCarBooking = this.formModel;
    this.router.navigate(['car-booking/confirmation']);
  }

}
