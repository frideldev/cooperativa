import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-calculadora-cuota',
  templateUrl: './calculadora-cuota.component.html',
  styleUrls: ['./calculadora-cuota.component.css']
})
export class CalculadoraCuotaComponent implements OnInit {

  urlCalculadora: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.urlCalculadora = this.sanitizer.bypassSecurityTrustResourceUrl(environment.urlBase+"/atencionalcliente/cuota");
   }

  ngOnInit() {
  }

}
