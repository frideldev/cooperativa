import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-formulario-reclamo',
  templateUrl: './formulario-reclamo.component.html',
  styleUrls: ['./formulario-reclamo.component.css']
})
export class FormularioReclamoComponent implements OnInit {
  urlPunto: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.urlPunto = this.sanitizer.bypassSecurityTrustResourceUrl(environment.urlBase+"/atencionalcliente/reclamocredito");
   }
  ngOnInit() {
  }
}
