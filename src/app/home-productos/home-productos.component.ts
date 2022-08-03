import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
//import { IsotopeOptions } from 'ngx-isotope';
//import { LayoutModes } from 'ngx-isotope/models/layout-modes.enum';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home-productos',
  templateUrl: './home-productos.component.html',
  styleUrls: ['./home-productos.component.css']
})

export class HomeProductosComponent implements OnInit {

  dataProductos: Object[]; 
  productoServicio:Object;
  /*public myOptions: IsotopeOptions = {
    itemSelector: '.grid-item',
  };*/
  
  constructor(private dataService: DataService,private  _router:Router) { }
  getTrainingName(){ 
    alert('solved!!'); 
  }
  getProdutos(){
    this.dataService.getProductos().subscribe(
      (data: any) =>{
      this.dataProductos=data.data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  ngOnInit() {
    this.dataService.currentServicioProducto.subscribe(obj => this.productoServicio = obj);
    this.getProdutos();
    
  }

  viewServicioProducto(obj:any){

    this.dataService.setServicioProducto(obj);
    this._router.navigate(['/producto',obj.id]);
  }

}
