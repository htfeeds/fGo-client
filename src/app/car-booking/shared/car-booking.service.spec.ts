import { TestBed, inject } from '@angular/core/testing';

import { CarBookingService } from './car-booking.service';

describe('CarBookingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarBookingService]
    });
  });

  it('should be created', inject([CarBookingService], (service: CarBookingService) => {
    expect(service).toBeTruthy();
  }));
});
