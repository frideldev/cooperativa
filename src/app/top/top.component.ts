import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  carouselOptionsTipoCambio: OwlOptions = {
    //margin: 50,
    items: 1,
    nav: false,
   // navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    loop: true,
    //autoWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    animateOut: 'slideOutDown',
    animateIn: 'slideInUp',
    dots: false,
    autoplayTimeout: 6000,
    //autoplayHoverPause: true,
  }
  dataTipoCambio: Object; 

  constructor(private dataService: DataService) { }

  getTipoCambio(){
    this.dataService.getTipoCambio().subscribe(
      data =>{
      this.dataTipoCambio=data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  ngOnInit() {
    this.getTipoCambio();
  }

}
