import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AbpService } from '../../../abp/abp.service';
import { PermissionCheckerService } from '../../../abp/auth/permission-checker.service';

@Component({
  selector: 'ngdz-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {

  constructor(
    public permission: PermissionCheckerService,
    public abp: AbpService
  ) { }

  ngOnInit() {

  }

}
