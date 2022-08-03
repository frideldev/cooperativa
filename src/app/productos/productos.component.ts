import { Component, OnInit } from '@angular/core';
//import { IsotopeOptions } from 'ngx-isotope';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['../home-productos/home-productos.component.css']
})
export class ProductosComponent implements OnInit {

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

