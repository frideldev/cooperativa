import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CanalesRoutingModule } from '../canales/canales-routing.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    CanalesRoutingModule,
  ],
  exports:[NavbarComponent]
})
export class CoreModule { }
