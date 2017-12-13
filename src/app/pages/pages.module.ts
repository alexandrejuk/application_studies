import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { routing } from './pages.routing';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [PagesComponent, NavbarComponent]
})
export class PagesModule { }
