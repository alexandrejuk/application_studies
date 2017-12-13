import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentosComponent } from './pagamentos.component';
import { routing } from './pagamentos.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [PagamentosComponent]
})
export class PagamentosModule { }
