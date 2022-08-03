import { Component, OnInit, ViewChild, ElementRef, Input, MissingTranslationStrategy } from '@angular/core';

@Component({
  selector: 'app-cooperativa',
  templateUrl: './cooperativa.component.html',
  styleUrls: ['./cooperativa.component.css']
})
export class CooperativaComponent implements OnInit {

  @ViewChild("historia") historia: ElementRef;
  @ViewChild("mision") mision: ElementRef;
  @ViewChild("vision") vision: ElementRef;
  @ViewChild("valores") valores: ElementRef;
  menu: Object[];
  //mision: ElementRef;
  constructor() { 
    this.menu=[
      {
        item:'HISTORIA',
        link:'historia'
      },
      {
        item:'MISION',
      link:'mision'
      },
      {
        item:'VISION',
      link:'vision'
      },
      {
        item:'VALORES',
      link:'valores'
      }
    ];
  }
  
  ngOnInit() {
  }
  scroll(ir: string){
    console.log("hola::"+ ir);
    switch(ir){
      case "historia":
          this.historia.nativeElement.scrollIntoView({behavior: 'smooth'});
          
          break;
      case "mision":
          this.mision.nativeElement.scrollIntoView({behavior: 'smooth'});
          break;
      case "vision":
          this.vision.nativeElement.scrollIntoView({behavior: 'smooth'});
          break;
      case "valores":
          this.valores.nativeElement.scrollIntoView({behavior: 'smooth'});
          break;
          
          
    }
    
  }

}
