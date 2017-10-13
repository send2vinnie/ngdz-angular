import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ngdzSidenavCollapse]'
})
export class SidenavCollapseDirective {

  @HostBinding('class.sidenav-collapsed')
  @Input('ngdzSidenavCollapse')
  ngdzSidenavCollapse = true;

  @HostBinding('class.open')
  open: boolean;

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.ngdzSidenavCollapse) {
      this.open = true;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.ngdzSidenavCollapse) {
      this.open = false;
    }
  }

  constructor() { }

}
