import { Component, OnInit } from '@angular/core';
//import { IsotopeOptions } from 'ngx-isotope';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['../home-productos/home-productos.component.css']
})
export class ServiciosComponent implements OnInit {

  dataServicios: Object[]; 
  productoServicio:Object;
  /*public myOptions: IsotopeOptions = {
    itemSelector: '.grid-item',
  };*/
  
  constructor(private dataService: DataService,private  _router:Router) { }
  getTrainingName(){ 
    alert('solved!!'); 
  }
  getServicios(){
    this.dataService.getServicios().subscribe(
      (data: any) =>{
      this.dataServicios=data.data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  ngOnInit() {
    this.dataService.currentServicioProducto.subscribe(obj => this.productoServicio = obj);
    this.getServicios();
    
  }
  
  viewServicioProducto(obj:any){
  
    this.dataService.setServicioProducto(obj);
    this._router.navigate(['/servicio',obj.id]);
  }
  
  }
  
  