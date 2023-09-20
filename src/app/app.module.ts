import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule, CarouselComponent } from 'ngx-owl-carousel-o';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import { IsotopeModule } from 'ngx-isotope';
import { NgxSpinnerModule} from 'ngx-spinner';
import { NgxSmartModalModule} from 'ngx-smart-modal';

//para el formulario de contacto
import {FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeSlideComponent } from './home-slide/home-slide.component';
import { TopComponent } from './top/top.component';
import { AboutComponent } from './about/about.component';
import { HomeProductosComponent } from './home-productos/home-productos.component';
import { ComunicadoComponent } from './comunicado/comunicado.component';
import { FooterComponent } from './footer/footer.component';
import { HomeServiciosComponent } from './home-servicios/home-servicios.component';
import { HomeComponent } from './home/home.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { PuntoReclamoComponent } from './punto-reclamo/punto-reclamo.component';
import { CalculadoraCuotaComponent } from './calculadora-cuota/calculadora-cuota.component';
import { CooperativaComponent } from './cooperativa/cooperativa.component';
import { OrganizacionComponent } from './organizacion/organizacion.component';
import { SafeHtmlPipe} from './pipes/safehtml.pipe';
import { MemoriarseComponent } from './memoriarse/memoriarse.component';
import { InformerseComponent } from './informerse/informerse.component';
import { EeffComponent } from './eeff/eeff.component';
import { NoticiasComponent } from './noticias/noticias.component';

import { ContactoComponent } from './contacto/contacto.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { CooperativaMenuComponent } from './cooperativa-menu/cooperativa-menu.component';
import { CanalesModule } from './canales/canales.module';
import { MenuComponent } from './menu/menu.component';
import { LicitacionesComponent } from './licitaciones/licitaciones.component';
import { EducacionfinancieraComponent } from './educacionfinanciera/educacionfinanciera.component';
import { ProductosViewComponent } from './home-productos/productos-view/productos-view.component';
import { Footer2Component } from './footer2/footer2.component';
import { SeccionViewComponent } from './educacionfinanciera/seccion-view/seccion-view.component';
import { AhorroComponent } from './calculadora-cuota/ahorro/ahorro.component';
import { TrabajanosotrosComponent } from './trabajanosotros/trabajanosotros.component';
import { UifComponent } from './uif/uif.component';
import { ServicioViewComponent } from './home-servicios/servicio-view/servicio-view.component';
import { NoticiaViewComponent } from './noticias/noticia-view/noticia-view.component';
import { RseComponent } from './rse/rse.component';
import { RseViewComponent } from './rse/rse-view/rse-view.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { InstitucionalViewComponent } from './institucional/institucional-view/institucional-view.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ComunicadoViewComponent } from './comunicado/comunicado-view/comunicado-view.component';
import { PrecreditoComponent } from './precredito/precredito.component';
import { NgWizardModule, NgWizardConfig, THEME} from 'ng-wizard';
import {TooltipModule } from 'ng2-tooltip-directive';
import { FormularioReclamoComponent } from './formulario-reclamo/formulario-reclamo.component';
import { MemoriaanualComponent } from './memoriaanual/memoriaanual.component';



//import { NgxCaptchaModule } from 'ngx-captcha';
const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};
const routes: Route[] =[
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'preguntasFrecuentes', component: PreguntasFrecuentesComponent},
  {path: 'puntoReclamo', component: PuntoReclamoComponent},
  {path: 'puntoReclamoCredito', component: FormularioReclamoComponent},
  {path: 'calculadora/credito', component: CalculadoraCuotaComponent},
  {path: 'cooperativa', component: CooperativaComponent},
  {path: 'organizacion', component: OrganizacionComponent},
  {path: 'memoriarse', component: MemoriarseComponent},
  {path: 'informerse', component: InformerseComponent},
  {path: 'eeff', component: EeffComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'noticia/:id', component: NoticiaViewComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'licitaciones', component: LicitacionesComponent},
  {path: 'educacion', component: EducacionfinancieraComponent},
  {path: 'educacion/seccion/:id', component:SeccionViewComponent},
  {path: 'productos', component: ProductosComponent},
  {path:'producto/:id',component:ProductosViewComponent},
  {path: 'servicios', component:ServiciosComponent},
  {path:'servicio/:id',component:ServicioViewComponent},
  {path: 'calculadora/ahorro', component:AhorroComponent},
  {path: 'trabajanosotros', component:TrabajanosotrosComponent},
  {path: 'uif', component:UifComponent},
  {path: 'rse', component:RseComponent},
  {path: 'rse/seccion/:id', component:RseViewComponent},
  {path: 'institucional', component:InstitucionalComponent},
  {path: 'institucional/seccion/:id', component:InstitucionalViewComponent},
  {path: 'comunicado/:id', component:ComunicadoViewComponent},
  {path: 'presolicitud', component:PrecreditoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeSlideComponent,
    TopComponent,
    AboutComponent,
    HomeProductosComponent,
    ComunicadoComponent,
    FooterComponent,
    HomeServiciosComponent,
    HomeComponent,
    PreguntasFrecuentesComponent,
    PuntoReclamoComponent,
    CalculadoraCuotaComponent,
    CooperativaComponent,
    OrganizacionComponent,
    SafeHtmlPipe,
    MemoriarseComponent,
    InformerseComponent,
    MemoriarseComponent,
    EeffComponent,
    NoticiasComponent,
    ContactoComponent,
    HomeMenuComponent,
    CooperativaMenuComponent,
    MemoriaanualComponent,
    MenuComponent,
    LicitacionesComponent,
    EducacionfinancieraComponent,
    ProductosViewComponent,
    Footer2Component,
    SeccionViewComponent,
    AhorroComponent,
    TrabajanosotrosComponent,
    UifComponent,
    ServicioViewComponent,
    NoticiaViewComponent,
    RseComponent,
    RseViewComponent,
    InstitucionalComponent,
    InstitucionalViewComponent,
    ProductosComponent,
    ServiciosComponent,
    ComunicadoViewComponent,
    PrecreditoComponent,
    FormularioReclamoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled',useHash:true}),
    HttpClientModule,
    //OwlModule,
    CarouselModule,
    //IsotopeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CanalesModule,
    NgxSpinnerModule,
    NgxSmartModalModule.forRoot(),
    NgWizardModule.forRoot(ngWizardConfig),
    TooltipModule,

  ],
  exports: [
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
