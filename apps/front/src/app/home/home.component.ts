import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ThemePickerDialogService } from '@polls/ui/ui-material';

@Component({
  selector: 'polls-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    public authService: AngularFireAuth,
    private router: Router,
    private themePicker: ThemePickerDialogService
  ) {}

  changeTheme() {
    this.themePicker.show();
  }

  logout() {
    this.authService
      .signOut()
      .then(() => this.router.navigateByUrl('/login'))
      .catch(console.error);
  }
}
