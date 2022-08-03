import { Component, OnInit, ViewChild, ElementRef, Input, MissingTranslationStrategy } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-organizacion',
  templateUrl: './organizacion.component.html',
  styleUrls: ['./organizacion.component.css']
})
export class OrganizacionComponent implements OnInit {

  dataConsejos: Object; 
  dataComites: Object;
  @ViewChild("asamblea") asamblea: ElementRef;
  @ViewChild("consejos") consejos: ElementRef;
  @ViewChild("comites") comites: ElementRef;
  menu: Object[];

  constructor(private dataService: DataService) {
    this.menu=[
      {
        item:'Asamblea',
        link:'asamblea'
      },
      {
        item:'Consejo',
      link:'consejos'
      },
      {
        item:'Comite',
      link:'comites'
      }
    ];
   }

  getConsejos(){
    this.dataService.getConcejos().subscribe(
      data =>{
      this.dataConsejos=data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  getComites(){
    this.dataService.getComites().subscribe(
      data =>{
      this.dataComites=data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  ngOnInit() {
    this.getConsejos();
    this.getComites();
  }
  scroll(ir: string){
    console.log("hola::"+ ir);
    switch(ir){
      case "asamblea":
          this.asamblea.nativeElement.scrollIntoView({behavior: 'smooth'});
          
          break;
      case "consejos":
          this.consejos.nativeElement.scrollIntoView({behavior: 'smooth'});
          break;
      case "comites":
          this.comites.nativeElement.scrollIntoView({behavior: 'smooth'});
          break;          
          
    }
    
  }

}
