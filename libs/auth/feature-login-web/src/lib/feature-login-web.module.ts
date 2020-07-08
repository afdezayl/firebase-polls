import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MaterialModule } from '@polls/ui/ui-material';
import { GoogleLoginComponent } from './google-login/google-login.component';

@NgModule({
  imports: [CommonModule, MaterialModule, AngularFireAuthModule],
  declarations: [GoogleLoginComponent],
  exports: [GoogleLoginComponent],
})
export class FeatureLoginWebModule {}
