import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../reducers/app-reducers';
import * as fromRoot from '../../../reducers/index';
@Component({
  selector: 'ngdz-quickpanel',
  templateUrl: './quickpanel.component.html',
  styleUrls: ['./quickpanel.component.scss']
})
export class QuickpanelComponent implements OnInit {
  Setting$ = this.store.select(fromApp.getSetting);

  constructor(
    public store: Store<fromApp.State>
  ) { }

  ngOnInit() {
    this.Setting$.subscribe(o => console.warn('settinrg:', o));
  }

}
