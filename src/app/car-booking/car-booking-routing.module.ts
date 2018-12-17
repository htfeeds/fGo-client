import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectionComponent } from './selection/selection.component';
import { InformationComponent } from './information/information.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FinishComponent } from './finish/finish.component';
import { CarBookingComponent } from './car-booking.component';

const routes: Routes = [
  {
    path: '',
    component: CarBookingComponent,
    children: [
      { path: '', redirectTo: 'selection', pathMatch: 'full' },
      { path: 'selection', component: SelectionComponent },
      { path: 'information', component: InformationComponent },
      { path: 'confirmation', component: ConfirmationComponent },
      { path: 'finish', component: FinishComponent },
      { path: '**', redirectTo: 'selection', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarBookingRoutingModule { }
