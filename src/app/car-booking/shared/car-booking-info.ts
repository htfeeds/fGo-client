export class CarBookingInfo {
  carId: number;
  orderId: number;
  fullName: string;
  email: string;
  phone: string;
  startTime: Date;
  startFrom: string;
  startTo: string;
  returnTime: Date;
  returnFrom: string;
  returnTo: string;
  personCount: number;
  isTwoWay: boolean;
  isFreePlace: boolean;

  constructor(carId?: number) {
    this.carId = carId;
    this.startTime = new Date();
    this.returnTime = new Date();
  }
}
