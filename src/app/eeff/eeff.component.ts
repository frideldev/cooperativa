import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-eeff',
  templateUrl: './eeff.component.html',
  styleUrls: ['./eeff.component.css']
})
export class EeffComponent implements OnInit {

  scroll(ir: HTMLElement){
    ir.scrollIntoView({behavior: 'smooth'});
  }

  dataEstados: Object; 
  dataIndices: Object;

  constructor(private dataService: DataService) { }

  getEstados(){
    this.dataService.getEstadosFinancieros().subscribe(
      data =>{
      this.dataEstados=data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  getIndices(){
    this.dataService.getIndiceCAP().subscribe(
      data =>{
      this.dataIndices=data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  ngOnInit() {
    this.getEstados();
    this.getIndices();
  }

}
