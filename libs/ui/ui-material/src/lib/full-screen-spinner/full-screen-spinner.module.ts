import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FullScreenSpinnerComponent } from './full-screen-spinner.component';

@NgModule({
  declarations: [FullScreenSpinnerComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FullScreenSpinnerComponent],
})
export class FullScreenSpinnerModule {}
