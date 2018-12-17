import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FGo';
  routes = [
    { linkName: 'Home', url: '' },
    { linkName: 'News', url: 'news' },
    { linkName: 'Contact', url: 'contact' },
    { linkName: 'About', url: 'about' }
  ];
}
