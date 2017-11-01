import { ChangeDetectorRef, OnDestroy, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { find, filter, each } from 'lodash';


import { SidenavItem } from '../../../../app-shared/utils/sidenav-item.model';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { SidenavComponent } from '../../sidenav/sidenav.component';



@Component({
  selector: 'ngdz-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  isOpen = false;
  input$: Subject<string> = new Subject<string>();
  Subscriptions: Subscription[] = [];
  private _input: string;
  public get input(): string {
    return this._input;
  }
  public set input(v: string) {
    this.input$.next(v);
    this._input = v;
  }

  @ViewChild('inputElem')
  inputElem: ElementRef;
  focused: boolean;

  recentlyVisited: SidenavItem[] = [];
  frequentlyVisited: SidenavItem[] = [];
  sidenavItems: SidenavItem[] = [];
  searchResult: SidenavItem[] = [];

  constructor(
    private router: Router,
    private store: Store<fromRoot.State>,
    private cd: ChangeDetectorRef
  ) { }

  ngOnDestroy(): void {
    this.Subscriptions.forEach(s => s.unsubscribe());
  }
  ngOnInit() {

    this.Subscriptions.push(this.store.select(fromRoot.getSidenavItems).subscribe((items) => {
      this.sidenavItems = items;
      this.cd.markForCheck();

    }));


    this.Subscriptions.push(this.input$.subscribe(value => {
      this.searchResult = filter(this.sidenavItems, (item) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      });

    }));

    // Start Demo Data - You can safely remove this
    this.recentlyVisited.push(this.findByRouteRecursive('/'));
    this.recentlyVisited.push(this.findByRouteRecursive('/login'));

    this.frequentlyVisited.push(this.findByRouteRecursive('/test'));
    this.frequentlyVisited.push(this.findByRouteRecursive(''));
    // End Demo Data - You can safely remove this

    this.Subscriptions.push(this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        const item = this.findByRouteRecursive(event.urlAfterRedirects);

        const index = this.recentlyVisited.indexOf(item);
        if (index > -1) {
          this.recentlyVisited.splice(index, 1);
        }

        this.recentlyVisited.unshift(item);

        if (this.recentlyVisited.length > 5) {
          this.recentlyVisited.pop();
        }

        this.cd.markForCheck();
      }

    }));
  }

  findByRouteRecursive(route: string, collection: SidenavItem[] = this.sidenavItems): SidenavItem {
    const result = <SidenavItem>(<any>find(collection, { 'route': route }));

    if (!result) {
      each(collection, (item) => {
        if (item.hasSubItems()) {
          const found = this.findByRouteRecursive(route, item.subItems);

          if (found) {
            return found;

          }
        }
      });
    }

    return <SidenavItem>result;
  }

  openDropdown() {
    this.cd.markForCheck();
    this.focused = true;
  }

  closeDropdown() {
    this.focused = false;
  }
}
