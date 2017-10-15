import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Authenticate } from '../models/user';

@Component({
  selector: 'ngdz-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Input() errorMessage: string | null;

  @Output() submitted = new EventEmitter<Authenticate>();

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({ // <-- the parent FormGroup
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit() { }

  submit() {

    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
