import { MENU } from './../../utils/menu-items';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public menuItems = [];

  constructor() {
    this.menuItems = MENU;
   }

  ngOnInit() {
  }

}
