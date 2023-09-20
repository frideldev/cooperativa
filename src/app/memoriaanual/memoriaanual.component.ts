import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-Memoriaanual',
  templateUrl: './memoriaanual.component.html',
  styleUrls: ['./memoriaanual.component.css']
})
export class MemoriaanualComponent implements OnInit {

  scroll(ir: HTMLElement){
    ir.scrollIntoView({behavior: 'smooth'});
  }

  dataMemorias: Object; 

  constructor(private dataService: DataService) { }

  getInsMemorias(){
    this.dataService.getInsMemorias().subscribe(
      data =>{
      this.dataMemorias=data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  ngOnInit() {
    this.getInsMemorias();
  }

}
