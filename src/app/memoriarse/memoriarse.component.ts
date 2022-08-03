import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-memoriarse',
  templateUrl: './memoriarse.component.html',
  styleUrls: ['./memoriarse.component.css']
})
export class MemoriarseComponent implements OnInit {

  scroll(ir: HTMLElement){
    ir.scrollIntoView({behavior: 'smooth'});
  }

  dataMemorias: Object; 

  constructor(private dataService: DataService) { }

  getMemorias(){
    this.dataService.getRSEMemorias().subscribe(
      data =>{
      this.dataMemorias=data;
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
