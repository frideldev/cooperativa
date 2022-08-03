import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OficinasSucursalesComponent } from './oficinas-sucursales/oficinas-sucursales.component';
import { CoreModule } from '../core/core.module';
import { CanalesRoutingModule } from './canales-routing.module';
import { AgmCoreModule } from '@agm/core';
import { FormContactoComponent } from './form-contacto/form-contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { FormPrecreditoComponent } from './form-precredito/form-precredito.component';
import { NgWizardModule, NgWizardConfig, THEME} from 'ng-wizard';
import {TooltipModule } from 'ng2-tooltip-directive';
import { AlertModule } from '../_alert';
import { ArchwizardModule } from 'angular-archwizard';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [OficinasSucursalesComponent, FormContactoComponent, FormPrecreditoComponent, PoliticaPrivacidadComponent],
  imports: [
    CommonModule,
    CoreModule,
    CanalesRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyB_LfQjHrSwvxsPsqviVhFF0EB5e0Q8x3I'
    }),
    
    NgxCaptchaModule,
    ReactiveFormsModule,
    NgWizardModule.forRoot(ngWizardConfig),
    TooltipModule,
    AlertModule,
    ArchwizardModule,
  ]
})
export class CanalesModule { }
