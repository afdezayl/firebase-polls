import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TokenManagerService } from './token-manager.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  constructor(
    private authService: AngularFireAuth,
    private tokenService: TokenManagerService
  ) {}

  loginWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    return this._signInWithPopup(provider);
  }

  _signInWithPopup(provider: auth.AuthProvider) {
    return from(this.authService.signInWithRedirect(provider));
    /* from(this.authService.signInWithPopup(provider)).pipe(
      switchMap((x) => x.user.getIdToken()),
      switchMap((token) =>
        this.tokenService.sendTokenToServer({ idToken: token })
      )
    ); */
  }
}
