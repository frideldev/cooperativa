import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia-view',
  templateUrl: './noticia-view.component.html',
  styleUrls: ['./noticia-view.component.css']
})
export class NoticiaViewComponent implements OnInit {
  public noticia:Object[];
  public dataNoticias: Object[]; 
  private idNoticia:any;

  constructor(private dataService:DataService, private routeId:ActivatedRoute) { }

  ngOnInit() {

    this.getNoticia(this.routeId.snapshot.paramMap.get('id'));
    this.getNoticias();
    //this.dataService.currentServicioProducto.subscribe( (obj: any) => this.producto = obj); 
  }
  getNoticia(id){
    this.dataService.getNoticiasDetalle(id).subscribe(
      (data: any) =>{
      this.noticia=data.data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  getNoticias(){
    this.dataService.getNoticias().subscribe(
      (data: any) =>{
      this.dataNoticias=data.data;
    },
    (error) =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }

}