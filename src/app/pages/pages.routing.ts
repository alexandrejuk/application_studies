import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'moto-boy', loadChildren: './moto-boy/moto-boy.module#MotoBoyModule' },
      { path: 'clientes', loadChildren: './clientes/clientes.module#ClientesModule' },
      { path: 'pagamentos', loadChildren: './pagamentos/pagamentos.module#PagamentosModule' }

    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
