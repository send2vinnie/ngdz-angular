import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngdz-toolbar-user-button',
  templateUrl: './toolbar-user-button.component.html',
  styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit, AfterViewInit {

  isOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    // TODO Implement user logout logic
  }
}
