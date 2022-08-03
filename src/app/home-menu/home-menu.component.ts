import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent implements OnInit {

  myOptions = {
    'placement': 'left',
    'theme': 'light'
  };

  constructor() { }

  ngOnInit() {
  }

}
