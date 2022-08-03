import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import Typed from 'typed.js';

@Component({
  selector: 'app-servicio-view',
  templateUrl: './servicio-view.component.html',
  styleUrls: ['./servicio-view.component.css']
})
export class ServicioViewComponent implements OnInit {

  public servicio:any;
  private idServicio:any;
  carouselOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    margin: 25,
    nav: false,
    dots: false,
   // navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
   navText: ['',''],
   // responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: false,
        loop: true
      },
      1500: {
        items: 1,
        nav: false,
        loop: true
      }
    }
  }
  constructor(private dataService:DataService, private routeId:ActivatedRoute) { }

  ngOnInit() {

    this.getServicio(this.routeId.snapshot.paramMap.get('id'));
    //this.dataService.currentServicioProducto.subscribe( (obj: any) => this.producto = obj);
  }
  getServicio(id){
    this.dataService.getServiciosDetalle(id).subscribe(
      (data: any) =>{
      this.servicio=data.data;
      /*const options = {
        strings: [this.servicio.nombre],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 3000,
        showCursor: true,
        cursorChar: '|',
        loop: true
      }
      const typed = new Typed('.typed-element',options);*/
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }

}
