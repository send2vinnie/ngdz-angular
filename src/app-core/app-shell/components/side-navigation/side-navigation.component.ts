import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngdz-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  @Input() open = false;
  constructor() { }

  ngOnInit() {
  }

}
