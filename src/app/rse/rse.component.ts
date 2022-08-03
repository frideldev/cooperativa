import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-rse',
  templateUrl: './rse.component.html',
  styleUrls: ['./rse.component.css']
})
export class RseComponent implements OnInit {
  public carouselOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    margin: 25,
    nav: true,
    dots: false,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    //responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 1,
        nav: true,
        loop: true
      },
      1500: {
        items: 1,
        nav: true,
        loop: true
      }
    }
  }
  scroll(ir: HTMLElement){
    ir.scrollIntoView({behavior: 'smooth'});
  }
  dataRse: Object[]; 
  constructor(private dataService: DataService) { }

  getRse(){
    this.dataService.getRse().subscribe(
      (data: any) =>{
      this.dataRse=data.data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  ngOnInit() {
    this.getRse();
  }

}
