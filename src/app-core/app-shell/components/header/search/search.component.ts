import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormField } from '@angular/material';

@Component({
  selector: 'ngdz-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  isOpen: boolean;

  @ViewChild('input')
  input: MatFormField;

  constructor() { }

  ngOnInit() {
  }

  open() {
    this.isOpen = true;

    setTimeout(() => {
      // tslint:disable-next-line:no-unused-expression
      this.input._control.focused;
    }, 100);

  }

  close() {
    this.isOpen = false;
  }


}
