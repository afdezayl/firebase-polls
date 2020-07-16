import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemePickerModule } from '@polls/ui/ui-material';
// When library is updated to angular 10... import { NgxSpinnerModule } from 'ngx-spinner';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // When library is updated to angular 10...NgxSpinnerModule,
    ReactiveFormsModule,
    ThemePickerModule,
    OverlayModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    // TODO: MatPaginatorIntl
    //{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlLoc },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
