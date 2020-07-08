import { Component, OnInit, Inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { of, from, interval } from 'rxjs';
import { delay, tap, debounce, debounceTime, take, map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { environment } from '../environments/environment';
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
