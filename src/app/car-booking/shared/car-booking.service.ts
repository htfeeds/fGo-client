import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CARS } from './mock-car';
import { Car } from './car';
import { CarBookingInfo } from './car-booking-info';

@Injectable()
export class CarBookingService {
  public currentCarBooking: CarBookingInfo;
  public dateTimeSettings = {
    bigBanner: false,
    timePicker: true,
    format: 'dd-MM-yyyy HH:mm',
    defaultOpen: false,
    closeOnSelect: true,
    rangepicker: false
  }

  constructor() { }

  public getCars(): Observable<Car[]> {
    return of(CARS);
  }

  getCar(carId: number): Observable<Car> {
    return of(CARS.find(car => car.id === carId));
  }

}
