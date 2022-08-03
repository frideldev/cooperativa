import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-licitaciones',
  templateUrl: './licitaciones.component.html',
  styleUrls: ['./licitaciones.component.css']
})
export class LicitacionesComponent implements OnInit {

  dataLicitaciones: Object[]; 

  constructor(private dataService: DataService) { }

  getMemorias(){
    this.dataService.getLicitaciones().subscribe(
      (data:any) =>{
      this.dataLicitaciones=data.data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  ngOnInit() {
    this.getMemorias();
  }

}
