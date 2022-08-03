import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-punto-reclamo',
  templateUrl: './punto-reclamo.component.html',
  styleUrls: ['./punto-reclamo.component.css']
})
export class PuntoReclamoComponent implements OnInit {
  urlPunto: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.urlPunto = this.sanitizer.bypassSecurityTrustResourceUrl(environment.urlBase+"/atencionalcliente/reclamo");
   }

  ngOnInit() {
  }


}
