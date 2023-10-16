import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';

@Component({
  selector: 'app-uif-view',
  templateUrl: './uif-view.component.html',
  styleUrls: ['../../rse/rse-view/rse-view.component.css']
})
export class UifViewComponent implements OnInit {

  public dataEntradas: Object[]; 
  public tituloActivo: String;
  public videoActivo: SafeResourceUrl;
  
  constructor(private dataService:DataService, private routeId:ActivatedRoute, public ngxSmartModalService: NgxSmartModalService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getEntradas(this.routeId.snapshot.paramMap.get('id'));
  }
  
  ngAfterViewInit(){
    this.ngxSmartModalService.getModal('videoModal').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      console.log('modal opened!', modal);
    }); 
  }

  getEntradas(id){
    this.dataService.getUifEntrada(id).subscribe(
      (data: any) =>{
      this.dataEntradas=data.data;
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
