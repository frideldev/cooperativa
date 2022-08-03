
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { OficinasSucursalesComponent } from './oficinas-sucursales/oficinas-sucursales.component';
import { FormContactoComponent } from './form-contacto/form-contacto.component';
import { FormPrecreditoComponent } from './form-precredito/form-precredito.component';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';

const routes: Routes = [
    {
        path: 'canales/oficinas-sucursales',
        component: OficinasSucursalesComponent,
        children: [

        ]
    },
    {
      path:'canales/contacto',
      component: FormContactoComponent
    },
    {
      path:'canales/presolicitud',
      component: FormPrecreditoComponent
    },
    {
      path:'politica-privacidad',
      component: PoliticaPrivacidadComponent
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanalesRoutingModule { }
