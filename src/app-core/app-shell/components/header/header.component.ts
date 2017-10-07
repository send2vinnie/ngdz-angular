import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngdz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() openMenu = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
