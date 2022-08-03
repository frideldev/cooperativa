import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seccion-view',
  templateUrl: './seccion-view.component.html',
  styleUrls: ['./seccion-view.component.scss']
})
export class SeccionViewComponent implements OnInit {

  public dataEntradas: Object[]; 
  public tituloActivo: String;
  public videoActivo: SafeResourceUrl;
  public archivoActivo: String;
  public imagenActivo: String;


  constructor(private dataService:DataService, private routeId:ActivatedRoute, public ngxSmartModalService: NgxSmartModalService, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.getEntradas(this.routeId.snapshot.paramMap.get('id'));
  }
  ngAfterViewInit(){
    this.ngxSmartModalService.getModal('videoModal').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      console.log('Rickroll modal opened!', modal);
    });  
  }
  getEntradas(id){
    this.dataService.getEducacionFinancieraEntrada(id).subscribe(
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
  abrirImagen(imagen:string){
    this.imagenActivo=imagen;
    this.ngxSmartModalService.getModal('imagenModal').open()
  }
  abrirDescarga(titulo:string,archivo:string){
    this.tituloActivo=titulo;
    this.archivoActivo=archivo;
    this.ngxSmartModalService.getModal('descargaModal').open()
  }

}