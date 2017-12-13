import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotoBoyComponent } from './moto-boy.component';
import { routing } from './moto-boy.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [MotoBoyComponent]
})
export class MotoBoyModule { }
