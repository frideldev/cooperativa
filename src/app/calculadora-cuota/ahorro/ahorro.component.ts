import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ahorro',
  templateUrl: './ahorro.component.html',
  styleUrls: ['./ahorro.component.css']
})
export class AhorroComponent implements OnInit {
  urlCalculadora: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.urlCalculadora = this.sanitizer.bypassSecurityTrustResourceUrl(environment.urlBase+"/atencionalcliente/miahorro");
  }

  ngOnInit() {
  }

}
