import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Slide } from '../interfaces/slide';
import { Subscription }   from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';
import { OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-slide',
  templateUrl: './home-slide.component.html',
  styleUrls: ['./home-slide.component.css']
})
export class HomeSlideComponent implements OnInit {

  dataSlides: Object;

  constructor(private dataService: DataService) {

   }
   carouselOptions: OwlOptions = {
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    margin: 25,
    nav: false,
    dots: true,
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
   getSlides(){
     this.dataService.getSlides().subscribe(
       data =>{
       this.dataSlides=data;
       console.log(this.dataSlides);
     },
     (error) =>{
       console.log(error);
       alert('Ocurrió un error');
     });
   }

  ngOnInit() {
    this.getSlides();
  }

}
