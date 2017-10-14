import { ChangeDetectorRef, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../sidenav/shared/sidenav.reducer';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { SidenavItem } from '../../../../app-shared/utils/sidenav-item.model';

@Component({
  selector: 'ngdz-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  isOpen = false;
  input: string;

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

  ngOnInit() {
    this.store.select(fromRoot.getSidenavItems).subscribe((items) => {
      this.sidenavItems = items;
      this.cd.markForCheck();

    });

    // TODO FIX FRO EVENT

    // Observable.fromEvent(this.inputElem.nativeElement, 'keyup')
    //   .distinctUntilChanged()
    //   .subscribe(() => {
    //     if (this.inputElem.nativeElement.value !== '') {
    //       this.searchResult = _.filter(this.sidenavItems, (item) => {
    //         return item.name.toLowerCase().includes(this.inputElem.nativeElement.value)
    //       });

    //       this.cd.markForCheck();
    //     }
    //   });

    // Start Demo Data - You can safely remove this
    this.recentlyVisited.push(this.findByRouteRecursive('/'));
    this.recentlyVisited.push(this.findByRouteRecursive('/apps/chat'));
    this.recentlyVisited.push(this.findByRouteRecursive('/tables/table-pagination'));
    this.recentlyVisited.push(this.findByRouteRecursive('/forms/form-elements'));
    this.recentlyVisited.push(this.findByRouteRecursive('/pages/profile'));

    this.frequentlyVisited.push(this.findByRouteRecursive('/forms/form-wizard'));
    this.frequentlyVisited.push(this.findByRouteRecursive('/apps/inbox'));
    this.frequentlyVisited.push(this.findByRouteRecursive('/tables/table-sorting'));
    this.frequentlyVisited.push(this.findByRouteRecursive('/editor'));
    this.frequentlyVisited.push(this.findByRouteRecursive('/maps/google-maps'));
    // End Demo Data - You can safely remove this

    this.router.events.subscribe((event) => {
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

    });
  }

  findByRouteRecursive(route: string, collection: SidenavItem[] = this.sidenavItems) {
    let result = _.find(collection, { 'route': route });

    if (!result) {
      _.each(collection, (item) => {
        if (item.hasSubItems()) {
          const found = this.findByRouteRecursive(route, item.subItems);

          if (found) {
            result = found;
            return false;
          }
        }
      });
    }

    return result;
  }

  openDropdown() {
    this.cd.markForCheck();
    this.focused = true;
  }

  closeDropdown() {
    this.focused = false;
  }
}
