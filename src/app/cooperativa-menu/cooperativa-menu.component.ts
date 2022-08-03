import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-cooperativa-menu',
  templateUrl: './cooperativa-menu.component.html',
  styleUrls: ['../home-menu/home-menu.component.css']
})
export class CooperativaMenuComponent implements OnInit {
  myOptions = {
    'placement': 'left',
    'theme': 'light'
  };

  @Input() menu: string;
  @Output() elemento: EventEmitter<string>= new EventEmitter<string>();
  onClick(ir: string){
    this.elemento.emit(ir);
    console.log("on click es:"+ir);
  }

  constructor() { }

  scroll(ir: HTMLElement){
    ir.scrollIntoView({behavior: 'smooth'});
  }

  ngOnInit() {
  }

}
