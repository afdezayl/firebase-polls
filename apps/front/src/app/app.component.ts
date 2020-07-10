import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'polls-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private firebase: AngularFireAuth) {}

  ngOnInit(): void {
    this.firebase
      .getRedirectResult()
      .then((result) => {})
      .catch((err) => alert(JSON.stringify(err))); // TODO: Replace for custom modal
  }
}
