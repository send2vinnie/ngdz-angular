import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromAuth from '../../../app-auth/reducers';

import * as Auth from '../../../app-auth/actions/auth';
import { MenuService } from '../../services/menu.service';
import { Router, NavigationEnd } from '@angular/router';
import { SetCurrentlyOpenByRouteAction } from '../../components/sidenav/shared/sidenav.action';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'ngdz-main-shell',
  templateUrl: './main-shell.component.html',
  styleUrls: ['./main-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MainShellComponent implements OnInit, OnDestroy {


  Subscriptions: Subscription[] = [];

  constructor(
    private menuService: MenuService,
    private router: Router,
    private store: Store<fromRoot.State>) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */

  }

  ngOnInit(): void {
    this.Subscriptions.push(this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.store.dispatch(new SetCurrentlyOpenByRouteAction(event.urlAfterRedirects));
      }
    }));
    this.menuService.LoadMenus();
  }
  ngOnDestroy(): void {

    this.Subscriptions.forEach(s => s.unsubscribe());
  }

}
