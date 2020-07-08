import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { ThemePickerComponent } from './theme-picker.component';
import { ThemePickerService } from './theme-picker.service';

@NgModule({
  declarations: [ThemePickerComponent],
  imports: [CommonModule, MaterialModule],
  providers: [ThemePickerService],
  exports: [ThemePickerComponent],
})
export class ThemePickerModule {
  constructor(private themePickerService: ThemePickerService) {}
}
