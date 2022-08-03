import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comunicado-view',
  templateUrl: './comunicado-view.component.html',
  styleUrls: ['../../noticias/noticia-view/noticia-view.component.css']
})
export class ComunicadoViewComponent implements OnInit {
  public comunicado:Object[];
  public dataComunicados: Object[]; 
  private idComunicado:any;

  constructor(private dataService:DataService, private routeId:ActivatedRoute) { }

  ngOnInit() {

    this.getComunicado(this.routeId.snapshot.paramMap.get('id'));
    this.getComunicados();
    //this.dataService.currentServicioProducto.subscribe( (obj: any) => this.producto = obj); 
  }
  getComunicado(id){
    this.dataService.getComunicadoDetalle(id).subscribe(
      (data: any) =>{
      this.comunicado=data.data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  getComunicados(){
    this.dataService.getComunicado().subscribe(
      (data: any) =>{
      this.dataComunicados=data.data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }

}