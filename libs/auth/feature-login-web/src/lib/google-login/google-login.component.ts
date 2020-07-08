import { Component, EventEmitter, Output } from '@angular/core';
import { FirebaseAuthService } from '../firebase-auth.service';
import { FullScreenSpinnerService } from '@polls/ui/ui-material';
import { of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'polls-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss'],
})
export class GoogleLoginComponent {
  @Output() loggedUser = new EventEmitter<void>();

  constructor(
    private authService: FirebaseAuthService,
    private spinnerService: FullScreenSpinnerService
  ) {}

  loginWithGoogle() {
    this.spinnerService
      .showDuringObs(this.authService.loginWithGoogle(), 'Loading...')
      .subscribe((r) => {
        this.loggedUser.next();
        this.loggedUser.complete();
      }, alert);
  }
}
