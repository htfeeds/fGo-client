import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionComponent } from './selection/selection.component';
import { CarBookingComponent } from './car-booking.component';
import { CarBookingRoutingModule } from './car-booking-routing.module';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FinishComponent } from './finish/finish.component';
import { InformationComponent } from './information/information.component';
import { AngularDateTimePickerModule } from '../angular2-datetimepicker';
import { CarBookingService } from './shared/car-booking.service';

@NgModule({
  imports: [
    CommonModule,
    CarBookingRoutingModule,
    AngularDateTimePickerModule
  ],
  declarations: [SelectionComponent, CarBookingComponent, ConfirmationComponent, FinishComponent, InformationComponent],
  providers: [CarBookingService]
})
export class CarBookingModule { }
