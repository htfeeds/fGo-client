import { Component, OnInit } from '@angular/core';
import { CarBookingService } from '../shared/car-booking.service';
import { Car } from '../shared/car';
import { Router } from '@angular/router';
import { CarBookingInfo } from '../shared/car-booking-info';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  cars: Car[];

  constructor(
    private router: Router,
    private carBookingService: CarBookingService
  ) { }

  ngOnInit() {
    this.carBookingService.getCars().subscribe(cars => this.cars = cars);
  }

  selectCar(carId: number) {
    this.carBookingService.currentCarBooking = new CarBookingInfo(carId);
    this.router.navigate(['car-booking/information']);
  }

}
