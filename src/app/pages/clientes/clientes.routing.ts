import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ClientesComponent } from './clientes.component';

export const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
