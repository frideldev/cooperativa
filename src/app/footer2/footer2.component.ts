import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css']
})
export class Footer2Component implements OnInit {

  dataTipoCambio: Object[];
  dataTasaInteres: Object[];
  dateNow: Date = new Date();
  fechaLiteral: String;

  myOptions = {
    'placement': 'top',
    'theme': 'light'
  };

  constructor(private dataService: DataService) { }

  getTipoCambio(){
    this.dataService.getTipoCambio().subscribe(
      (data: any) =>{
      this.dataTipoCambio=data.data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  getTasaInteres(){
    this.dataService.getTasaintereses().subscribe(
      (data: any) =>{
      this.dataTasaInteres=data.data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }

  ngOnInit() {
    this.getTipoCambio();
    this.getTasaInteres();
    this.fechaLiteral=(this.dateNow.getDate()+" de "+this.meses[this.dateNow.getMonth()]+ " de "+this.dateNow.getFullYear());
  }

  meses: String[] =[
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"
  ]

  //

}
