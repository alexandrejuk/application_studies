import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { EntregasComponent } from './entregas.component';
import { NovaEntregaComponent } from './components/nova-entrega/nova-entrega.component';

export const routes: Routes = [
  {
    path: '',
    component: EntregasComponent,
    children: [
      { path: 'nova-entrega', component: NovaEntregaComponent },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
