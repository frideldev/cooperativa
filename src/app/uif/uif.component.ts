import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-uif',
  templateUrl: './uif.component.html',
  styleUrls: ['./uif.component.css']
})
export class UifComponent implements OnInit {

  scroll(ir: HTMLElement){
    ir.scrollIntoView({behavior: 'smooth'});
  }
  dataUif: Object[]; 
  constructor(private dataService: DataService) { }

  getMemorias(){
    this.dataService.getUif().subscribe(
      (data: any) =>{
      this.dataUif=data.data;
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
