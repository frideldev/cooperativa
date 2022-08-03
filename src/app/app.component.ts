import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myOptions = {
    'placement': 'top',
    'theme': 'light'
  };

  title = 'Cooperativa de Ahorro y Crédito Madre y Maestra';
  constructor(private spinnerService: NgxSpinnerService){

  }
  ngOnInit(){
    this.spinnerService.show('mySpinner',{
      type: 'line-scale-party', 
      size: 'large', 
      bdColor: 'rgba(100,149,237, .8)', 
      color: 'white'
    });
    //this.spinner();
  }
  spinner(): void {
    this.spinnerService.show('mySpinner');
    setTimeout(() =>{
      this.spinnerService.hide('mySpinner');
    },10000);
  }
}
