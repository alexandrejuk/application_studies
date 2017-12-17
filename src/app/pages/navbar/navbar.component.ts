import { Component, OnInit } from '@angular/core';
import { MENU } from './../../utils/menu-items';

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
