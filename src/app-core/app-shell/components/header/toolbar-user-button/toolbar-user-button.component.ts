import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Auth from '../../../../app-auth/actions/auth';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'ngdz-toolbar-user-button',
  templateUrl: './toolbar-user-button.component.html',
  styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit, AfterViewInit {

  isOpen: boolean;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  logout() {

    this.store.dispatch(new Auth.Logout());
    // TODO Implement user logout logic
  }
}
