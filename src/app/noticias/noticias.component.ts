import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  dataNoticias: Object[]; 

  constructor(private dataService: DataService) { }
  espar(i){
    console.log(i%2);
    if(i%2)
      return true;
    else
      return false;

  }
  getNoticias(){
    this.dataService.getNoticias().subscribe(
      (data: any) =>{
      this.dataNoticias=data.data;
      console.log(this.dataNoticias);
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  ngOnInit() {
    this.getNoticias();
  }


}
