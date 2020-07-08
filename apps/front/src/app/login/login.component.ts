import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'polls-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  redirectToHome() {
    this.router.navigateByUrl('/home');
  }
}
