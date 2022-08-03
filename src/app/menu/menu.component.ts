import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../home-menu/home-menu.component.css']
})
export class MenuComponent implements OnInit {

  myOptions = {
    'placement': 'left',
    'theme': 'light'
  };
  constructor() { }

  ngOnInit() {
  }

}
