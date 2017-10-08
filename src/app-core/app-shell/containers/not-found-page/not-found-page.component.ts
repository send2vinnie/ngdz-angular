import { Component, OnInit,  ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngdz-not-found-page',
   changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
