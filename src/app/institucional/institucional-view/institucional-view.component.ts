import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';

@Component({
  selector: 'app-institucional-view',
  templateUrl: './institucional-view.component.html',
  styleUrls: ['../../rse/rse-view/rse-view.component.css']
})
export class InstitucionalViewComponent implements OnInit {

  public dataEntradas: Object[]; 
  public tituloActivo: String;
  public videoActivo: SafeResourceUrl;


  constructor(private dataService:DataService, private routeId:ActivatedRoute, public ngxSmartModalService: NgxSmartModalService, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.getEntradas(this.routeId.snapshot.paramMap.get('id'));
    //this.dataService.currentServicioProducto.subscribe( (obj: any) => this.producto = obj); 
  }
  ngAfterViewInit(){
    this.ngxSmartModalService.getModal('videoModal').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      console.log('Rickroll modal opened!', modal);
    });
   //this.getEntradas(this.routeId.snapshot.paramMap.get('id'));
    
  }
  getEntradas(id){
    this.dataService.getInfoEntrada(id).subscribe(
      (data: any) =>{
      this.dataEntradas=data.data;
      console.log(this.dataEntradas);
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  abrirVideo(titulo:string,video:string){
    this.tituloActivo=titulo;
    this.videoActivo=this.sanitizer.bypassSecurityTrustResourceUrl(video);
    this.ngxSmartModalService.getModal('videoModal').open();
  }

}