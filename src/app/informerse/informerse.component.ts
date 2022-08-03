import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-informerse',
  templateUrl: './informerse.component.html',
  styleUrls: ['./informerse.component.css']
})
export class InformerseComponent implements OnInit {

  scroll(ir: HTMLElement){
    ir.scrollIntoView({behavior: 'smooth'});
  }

  dataInformes: Object; 

  constructor(private dataService: DataService) { }

  getInformes(){
    this.dataService.getRSEInformes().subscribe(
      data =>{
      this.dataInformes=data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  ngOnInit() {
    this.getInformes();
  }

}
