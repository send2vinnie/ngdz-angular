import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { LIST_FADE_ANIMATION } from '../../../../app-shared/utils/list.animation';
import { Overlay } from '@angular/cdk/overlay';
import { OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { OverlayOrigin } from '@angular/cdk/overlay';

@Component({
  selector: 'ngdz-toolbar-notifications',
  templateUrl: './toolbar-notifications.component.html',
  styleUrls: ['./toolbar-notifications.component.scss'],
  animations: [...LIST_FADE_ANIMATION]
})
export class ToolbarNotificationsComponent implements OnInit {
  @ViewChild('NotifationPortal') overlayPortal: TemplatePortalDirective;
  @ViewChild('NotifationOverlay') overlayOrigin: OverlayOrigin;


  isOpen: boolean;
  notifications: any[];
  demoTriggers = 0;

  constructor(
    private cd: ChangeDetectorRef,
    public overlay: Overlay
  ) { }

  ngOnInit() {
    this.notifications = [
      {
        icon: 'notifications',
        name: 'This is a notification',
        time: 'few sec ago',
        read: false,
        colorClass: ''
      },
      {
        icon: 'shopping_basket',
        name: 'User bought your template',
        time: '23 min ago',
        read: false,
        colorClass: 'primary'
      },
      {
        icon: 'eject',
        name: 'Server Crashed',
        time: 'an hour ago',
        read: false,
        colorClass: 'accent'
      },
      {
        icon: 'cached',
        name: 'New user registered',
        time: '6 hours ago',
        read: true,
        colorClass: ''
      },
      {
        icon: 'code',
        name: 'John added you as friend',
        time: 'yesterday',
        read: true,
        colorClass: ''
      }
    ];
  }

  markAsRead(notification) {
    notification.read = true;
  }

  dismiss(notification) {
    this.notifications.splice(this.notifications.indexOf(notification), 1);
    this.triggerDemoNotification();
  }



  toggleDropdown() {

    this.isOpen = !this.isOpen;
    this.triggerDemoNotification();
    console.log(this.overlayPortal);
  //   const strategy = this.overlay.position()
  //     .connectedTo(
  //     this.overlayOrigin.elementRef,
  //     { originX: 'start', originY: 'bottom' },
  //     { overlayX: 'end', overlayY: 'top' });

  //   const config = new OverlayConfig({ positionStrategy: strategy });
  //   config.hasBackdrop = true;
  // //  config.direction
  //   const overlayRef = this.overlay.create(config);

  //   overlayRef.attach(this.overlayPortal);
  }

  onClickOutside() {
    this.isOpen = false;
  }

  triggerDemoNotification() {
    if (this.demoTriggers === 0) {
      this.demoTriggers++;

      setTimeout(() => {
        this.notifications.unshift({
          icon: 'cached',
          name: 'New user registered',
          time: moment().fromNow(),
          read: false,
          colorClass: '',
        });

        this.cd.markForCheck();
      }, 2000);
    } else if (this.demoTriggers === 1) {
      this.demoTriggers++;

      setTimeout(() => {
        this.notifications.unshift({
          icon: 'shopping_basket',
          name: 'User bought your template',
          time: '23 min ago',
          read: false,
          colorClass: 'primary'
        });

        this.cd.markForCheck();
      }, 2000);
    }
  }
}
