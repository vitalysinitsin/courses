import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasboardComponent } from './dasboard/dasboard.component';

@NgModule({
  declarations: [DasboardComponent],
  imports: [CommonModule],
  exports: [DasboardComponent],
})
export class AdminModule {}
