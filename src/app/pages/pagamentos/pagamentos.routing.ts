import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagamentosComponent } from './pagamentos.component';

export const routes: Routes = [
  {
    path: '',
    component: PagamentosComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
