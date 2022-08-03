import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-educacionfinanciera',
  templateUrl: './educacionfinanciera.component.html',
  styleUrls: ['./educacionfinanciera.component.scss']
})
export class EducacionfinancieraComponent implements OnInit {

  dataEducacionFinanciera: Object[];

  constructor(private dataService: DataService) { }
  scroll(ir: HTMLElement){
    ir.scrollIntoView({behavior: 'smooth'});
  }
  ngOnInit() {
    this.getEducacionFinanciera();
    const options = {
      strings: ['Aprende.', 'Informate.','Socializa.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    }
    const typed = new Typed('.typed-element',options);
  }
  getEducacionFinanciera(){
    this.dataService.getEducacionFinanciera().subscribe(
      (data: any) =>{
      this.dataEducacionFinanciera=data.data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
}
