import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { routing } from './clientes.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ClientesComponent]
})
export class ClientesModule { }
