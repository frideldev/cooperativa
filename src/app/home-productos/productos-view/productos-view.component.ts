import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import Typed from 'typed.js';
import { ActivatedRoute } from '@angular/router';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-productos-view',
  templateUrl: './productos-view.component.html',
  styleUrls: ['./productos-view.component.css']
})
export class ProductosViewComponent implements OnInit {

  public producto:any;
  private idProducto:any;
  carouselOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    margin: 25,
    nav: false,
    dots: false,
    //navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    navText: ['',''],
    //responsiveClass: true,
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

    this.getProducto(this.routeId.snapshot.paramMap.get('id'));


    //this.dataService.currentServicioProducto.subscribe( (obj: any) => this.producto = obj);

  }
  getProducto(id){
    this.dataService.getProductosDetalle(id).subscribe(
      (data: any) =>{
      this.producto=data.data;
      /*const options = {
        strings: [this.producto.nombre],
        //startDelay: 6000,
        startLine: 5,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 10000,
        showCursor: false,
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
