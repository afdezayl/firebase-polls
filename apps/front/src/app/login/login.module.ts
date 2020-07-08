import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule, FullScreenSpinnerModule } from '@polls/ui/ui-material';
import { FeatureLoginWebModule } from '@polls/auth/feature-login-web';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FullScreenSpinnerModule,
    MaterialModule,
    FeatureLoginWebModule,
    RouterModule.forChild(routes),
  ],
})
export class LoginModule {}
