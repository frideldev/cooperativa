import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myOptions = {
    'placement': 'left',
    'theme': 'light'
  };

  constructor() { }

  ngOnInit() {
  }

}
