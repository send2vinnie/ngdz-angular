import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngdz-app',
  template:`<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
