import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trabajanosotros',
  templateUrl: './trabajanosotros.component.html',
  styleUrls: ['./trabajanosotros.component.css']
})
export class TrabajanosotrosComponent implements OnInit {
  dataTrabajaNosotros;
  public urlBase= environment.urlBase;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTrabajos();
  }
  getTrabajos(){
    this.dataService.getTrabajos().subscribe(
      (data: any) =>{
      this.dataTrabajaNosotros=data.data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
}
