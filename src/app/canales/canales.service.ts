import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contacto } from './contacto';
import { datosPrecredito } from './datosPrecredito';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CanalesService {

  ServerUrl = environment.apiUrl;
  errorData: {};

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest'})
  };

  constructor(private http: HttpClient) { }

  getPage(slug: string) {
    
  }

  contactForm(formdata: Contacto) {
    return this.http.post<Contacto>(this.ServerUrl + '/canales/contacto', formdata, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  
  datosPrecreditoForm(formdata: datosPrecredito) {
    return this.http.post<datosPrecredito>(this.ServerUrl + '/canales/precredito', formdata, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.message}`);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! El envio a fallado',
      errorDesc: 'Algo pasó durante el envio. Intentelo nuevamente mas tarde.'
    };
    return throwError(this.errorData);
  }
}