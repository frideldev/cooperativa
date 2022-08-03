import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-oficinas-sucursales',
  templateUrl: './oficinas-sucursales.component.html',
  styleUrls: ['./oficinas-sucursales.component.css']
})
export class OficinasSucursalesComponent implements OnInit {
  myOptions = {
    'placement': 'left',
    'theme': 'light'
  };

  dataOficinas: Object[];
  title: string = 'Oficinas y Sucursales';
  lat: number =0;
  lng: number = 0;
  zoom: number = 18;
  oficina:string;
  direccion:string;
  telefono:string;
  fax:string;
  d:Object;
  description:string;
  constructor(private dataService: DataService) { }

  getOficinas(){
    this.dataService.getOficinasSucursales().subscribe(
      (data:any) =>{
      this.dataOficinas=data.data;
      if (this.dataOficinas.length>0){

        this.setMap(this.dataOficinas[0]['oficinas'][0]);



      }

    },
    (error) =>{
      console.log(error);

    });
  }
  ngOnInit() {
    this.getOficinas();
  }

  setMap(ofi:any){

    this.lat= Number(ofi.mapa.latitud);
    this.lng=Number(ofi.mapa.longitud);
    this.oficina=ofi.nombre;
    this.direccion=ofi.direccion;
    this.telefono=ofi.telefono;
    this.fax=ofi.fax;
    this.description=ofi.descripcion;

  }

  onMouseOver(infoWindow, $event: MouseEvent) {
    infoWindow.open();
}

onMouseOut(infoWindow, $event: MouseEvent) {
    infoWindow.close();
}
}
