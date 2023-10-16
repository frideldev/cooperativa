import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_ENDPOINT = environment.apiUrl;

  //API_ENDPOINT = 'http://192.168.1.20/api';
  //API_ENDPOINT = 'http://192.168.1.105/mym_backend/public/api';
  //API_ENDPOINT = 'http://www.madreymaestra.test:810/api';
  private servicioProductoSource = new BehaviorSubject(Object);
  currentServicioProducto = this.servicioProductoSource.asObservable();

  setServicioProducto(obj:any){

    this.servicioProductoSource.next(obj);
    console.log(this.currentServicioProducto);
  }

  constructor(private httpClient: HttpClient) { }
  getSlides(){
    return this.httpClient.get(this.API_ENDPOINT + '/slides');
  }
  getTipoCambio(){
    return this.httpClient.get(this.API_ENDPOINT + '/tipocambio');
  }
  getTasaintereses(){
    return this.httpClient.get(this.API_ENDPOINT + '/tasaintereses');
  }
  getFaqs(){
    return this.httpClient.get(this.API_ENDPOINT + '/faqs');
  }
  getProductos(){
    return this.httpClient.get(this.API_ENDPOINT + '/productos');
  }
  getProductosDetalle(id:number){
    return this.httpClient.get(this.API_ENDPOINT + '/productos/'+id);
  }
  getServicios(){
    return this.httpClient.get(this.API_ENDPOINT + '/servicios');
  }
  getServiciosDetalle(id:number){
    return this.httpClient.get(this.API_ENDPOINT + '/servicios/'+id);
  }
  getConcejos(){
    return this.httpClient.get(this.API_ENDPOINT + '/concejos');
  }
  getComites(){
    return this.httpClient.get(this.API_ENDPOINT + '/comites');
  }
  getComunicado(){
    return this.httpClient.get(this.API_ENDPOINT + '/eventos/c');
  }
  getComunicadoDetalle(id:number){
    return this.httpClient.get(this.API_ENDPOINT + '/eventos/c/'+id);
  }
  getNoticias(){
    return this.httpClient.get(this.API_ENDPOINT + '/eventos/n');
  }
  getNoticiasDetalle(id:number){
    return this.httpClient.get(this.API_ENDPOINT + '/eventos/n/'+id);
  }
  getTrabajos(){
    return this.httpClient.get(this.API_ENDPOINT + '/eventos/t');
  }
  getRSEMemorias(){
    return this.httpClient.get(this.API_ENDPOINT + '/memoriasrse');
  }
  getRSEInformes(){
    return this.httpClient.get(this.API_ENDPOINT + '/informesrse');
  }
  getInsMemorias(){
    return this.httpClient.get(this.API_ENDPOINT + '/memorias');
  }
  getEstadosFinancieros(){
    return this.httpClient.get(this.API_ENDPOINT + '/eeff');
  }
  getIndiceCAP(){
    return this.httpClient.get(this.API_ENDPOINT + '/indices');
  }
  getOficinasSucursales(){
    return this.httpClient.get(this.API_ENDPOINT+'/oficinas');
  }
  getLicitaciones(){
    return this.httpClient.get(this.API_ENDPOINT+'/licitaciones');
  }
  getEducacionFinanciera(){
    return this.httpClient.get(this.API_ENDPOINT+'/educacionf');
  }
  getEducacionFinancieraEntrada(id:number){
    return this.httpClient.get(this.API_ENDPOINT+'/educacionf/sec/'+id);
  }
  getUif(){
    return this.httpClient.get(this.API_ENDPOINT+'/uif');
  }
  getUifEntrada(id:number){
    return this.httpClient.get(this.API_ENDPOINT + '/unidadif/sec/'+id);
  }
  getRse(){
    return this.httpClient.get(this.API_ENDPOINT+'/rse');
  }
  getRseEntrada(id:number){
    return this.httpClient.get(this.API_ENDPOINT + '/rse/sec/'+id);
  }
  getInfo(){
    return this.httpClient.get(this.API_ENDPOINT+'/info');
  }
  getInfoEntrada(id:number){
    return this.httpClient.get(this.API_ENDPOINT + '/info/sec/'+id);
  }
  getInfoAsamblea(){
    return this.httpClient.get(this.API_ENDPOINT + '/asambleasocios/definicion/');
  }
}
