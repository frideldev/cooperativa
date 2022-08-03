import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { comunicado } from '../interfaces/comunicado';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-comunicado',
  templateUrl: './comunicado.component.html',
  styleUrls: ['./comunicado.component.css']
})
export class ComunicadoComponent implements OnInit {

  public dataComunicado: Object = {
    nombre: null,
    descripcion_corta: null,
    descripcion: null,
    fecha: null,
    fecha_fin: null,
    imagen: null
  };
  public bandera =false;

  constructor(private dataService: DataService, public ngxSmartModalService: NgxSmartModalService) { 
    this.getComunicado();    
  }

  getComunicado(){
    this.dataService.getComunicado().subscribe(
      (data: any) =>{
      this.dataComunicado=data.data[0];
      console.log(this.dataComunicado);
      this.bandera=true;
      if(this.dataComunicado)
          this.abrirModal();
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  abrirModal(){
    this.ngxSmartModalService.getModal('comunicadoModal').open()
  }
  ngOnInit() {
    
  }
}
