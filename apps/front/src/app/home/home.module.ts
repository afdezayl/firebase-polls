import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@polls/ui/ui-material';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {
  ShowPaginatorCurrentPageDirective,
  DynamicPaginatorExtensionComponent
} from './show-paginator-current-page.directive';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    ShowPaginatorCurrentPageDirective,
    DynamicPaginatorExtensionComponent,
  ],
  imports: [
    CommonModule,
    AngularFireModule,
    HomeRoutingModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
})
export class HomeModule {}
