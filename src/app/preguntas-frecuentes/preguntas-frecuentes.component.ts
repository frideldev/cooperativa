import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.css']
})
export class PreguntasFrecuentesComponent implements OnInit {
  dataFaqs: Object;
  constructor(private dataService: DataService) { }

  getFaqs(){
    this.dataService.getFaqs().subscribe(
      data =>{
      this.dataFaqs=data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  ngOnInit() {
    this.getFaqs();
  }

}
