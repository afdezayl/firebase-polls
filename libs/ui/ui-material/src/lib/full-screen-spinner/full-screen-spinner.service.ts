import { Injectable } from '@angular/core';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { Observable, of, pipe, concat } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { ComponentPortal } from '@angular/cdk/portal';
import { FullScreenSpinnerComponent } from './full-screen-spinner.component';

@Injectable({
  providedIn: 'root',
})
export class FullScreenSpinnerService {
  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay) {}

  showDuringObs(obs: Observable<any>, message?: string) {
    return of(this.show(message)).pipe(
      switchMap((x) => obs),
      tap((x) => this.hide()),
      catchError((err) => {
        this.hide();
        throw err;
      })
    );
  }

  show(message?: string) {
    this.overlayRef = this.overlay.create();
    const component = this.overlayRef.attach(
      new ComponentPortal(FullScreenSpinnerComponent)
    );
    component.instance.message = message;
  }

  hide() {
    this.overlayRef.detach();
  }
}
