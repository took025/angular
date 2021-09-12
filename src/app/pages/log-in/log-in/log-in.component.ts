import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { atLeastOneLowercaseValidator, atLeastOneUppercaseValidator, atLeastOneNumberValidator } from './validator'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12)]),
      password: new FormControl('', [
        Validators.required,
        atLeastOneNumberValidator,
        atLeastOneUppercaseValidator,
        atLeastOneLowercaseValidator,
      ]),
    });
  }

  formSubmit(form: any) {
    if (form.valid) {
      this.router.navigate(['/home']);
    }
  }

}
