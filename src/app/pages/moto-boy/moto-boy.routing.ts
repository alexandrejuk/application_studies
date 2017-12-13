import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MotoBoyComponent } from './moto-boy.component';

export const routes: Routes = [
  {
    path: '',
    component: MotoBoyComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
