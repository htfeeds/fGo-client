import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-booking',
  templateUrl: './car-booking.component.html',
  styleUrls: ['./car-booking.component.css']
})
export class CarBookingComponent implements OnInit {
  public dateMessage: string;
  public routes = [
    { linkName: 'Chọn xe', url: 'home' },
    { linkName: 'Nhập thông tin', url: 'car-order' },
    { linkName: 'Xác nhận', url: 'car-order-confirmation' },
    { linkName: 'Hoàn thành', url: 'car-order-finish' }
  ];

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      let date = new Date();
      this.dateMessage = date.toLocaleTimeString();
    }, 1000);
  }

  getDateMessage() {
    return this.dateMessage;
  }

}
