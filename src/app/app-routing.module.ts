import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'car-booking',
    pathMatch: 'full'
  },
  {
    path: 'car-booking',
    loadChildren: './car-booking/car-booking.module#CarBookingModule'
  },
  {
    path: '**',
    loadChildren: './not-found-page/not-found-page.module#NotFoundPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
