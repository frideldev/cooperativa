import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-servicios',
  templateUrl: './home-servicios.component.html',
  styleUrls: ['./home-servicios.component.css']
})
export class HomeServiciosComponent implements OnInit {

  dataServicios: Object[]; 
  Servicios: Object[];
  bandera=0;

  constructor(private dataService: DataService,private  _router:Router) { }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    //dotClass:'.owl-dot-custom',
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  getServicios(){
    this.dataService.getServicios().subscribe(
      (data: any) =>{
      this.dataServicios=data.data;
      console.log(this.dataServicios);
      /*for (let subtipos in this.dataServicios){
        console.log("hola nando:::" + subtipos);
        for(let subtipo in this.dataServicios[subtipos]){
          //if(subtipo=="subtipos")
            console.log(" subtipo::: " +this.dataServicios[subtipos][subtipo]);
            for(let servicio in this.dataServicios[subtipos][subtipo]){
              console.log("servicio:::"+ this.dataServicios[subtipos][subtipo][servicio] );
              this.Servicios[this.bandera]=this.dataServicios[subtipos][subtipo][servicio];
              this.bandera++;
            }
        }
      }*/
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  ngOnInit() {
    this.getServicios();
  }
  viewServicioProducto(obj:any){

    this.dataService.setServicioProducto(obj);
    this._router.navigate(['/servicio',obj.id]);
  }

}