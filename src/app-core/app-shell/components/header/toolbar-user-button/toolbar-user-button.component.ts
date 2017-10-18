import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as authActions from '../../../../app-auth/actions/auth';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as fromAuth from '../../../../app-auth/reducers';
import { Observable } from 'rxjs/Observable';
import { ProfileModel } from '../../../../app-auth/models/profile-model';
@Component({
  selector: 'ngdz-toolbar-user-button',
  templateUrl: './toolbar-user-button.component.html',
  styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit, AfterViewInit {

  isOpen: boolean;
  profile$: Observable<ProfileModel>;
  loggedIn$: Observable<boolean>;
  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.profile$ = this.store.select(fromAuth.getProfile);
    this.loggedIn$ = this.store.select(fromAuth.getLoggedIn);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  logout() {

    this.store.dispatch(new authActions.Logout());
    // TODO Implement user logout logic
  }
}
