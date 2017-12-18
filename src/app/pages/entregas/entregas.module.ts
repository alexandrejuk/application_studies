import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntregasComponent } from './entregas.component';
import { routing } from './entregas.routing';
import { NovaEntregaComponent } from './components/nova-entrega/nova-entrega.component';
import { MinhasEntregasComponent } from './components/minhas-entregas/minhas-entregas.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [EntregasComponent, NovaEntregaComponent, MinhasEntregasComponent]
})
export class EntregasModule { }
