import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CanalesService } from '../canales.service';
import { NgWizardConfig, THEME, StepChangedArgs, NgWizardService} from 'ng-wizard';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { datosPrecredito } from '../datosPrecredito';
import { AlertService } from '../../_alert';
import {MovingDirection, WizardComponent} from 'angular-archwizard';

@Component({
  selector: 'app-form-precredito',
  templateUrl: './form-precredito.component.html',
  styleUrls: ['./form-precredito.component.css','./form-precredito.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormPrecreditoComponent implements OnInit {
  
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;

    options = {
      autoClose: false,
      keepAfterRouteChange: false
     };
      model : datosPrecredito ={
      nombres: '',
      primer_apellido: '',
      fecha_nacimiento: new Date(),
      telefono: '',
      celular_whatsapp: '',
      correo: '',
      direccion: '',
      estado_civil: '',
      profesion: '',
      monto: 0.0,
      moneda: '',
      proposito: '',
      m_negocio:'0',
      m_personal:'0',
      m_hipotecario:'0',
      m_vehiculo:'0',
      m_libre_disponibilidad:'0'
    };
    Estados: any = [{id:'S',name:'Soltero(a)'},{id:'C',name:'Casado(a)'},{id:'D',name:'Divorciado(a)'},{id:'V',name:'Viudo(a)'}];
    Monedas: any = [{id:'Bs',name:'Bolivianos'},{id:'Usd',name:'Dólares'}];
  
    registerForm: FormGroup;
    
    submitted =false;
    exito=false;
    //siteKey ="6LdWVKsUAAAAANXjRPMZ_RStCHS15bCmf7YifIWf";
    siteKey ="6LfzxKUUAAAAAP44pGqRA1dIxOkdbWfpODV-XJKF";
    size="Normal";
    lang="es";
    theme="Light";
    type="Image";
    useGlobalDomain ="false";
    error:{};
  
    config: NgWizardConfig = {
      selected: 0,
      theme: THEME.dots,
      lang: {next: 'Siguiente', previous:'Atras'},
      /*toolbarSettings: {
        toolbarExtraButtons: [
          {text: 'Validar', class: 'btn btn-success',[disabled]: '!registerForm.valid', event:()=> {alert("Finalizar");}}
        ]
      }*/
    };
    myOptions = {
      'placement': 'top',
      'theme': 'light'
    };

    // Choose city using select dropdown
    changeEstado(e) {
      console.log(e.target.value);
      this.estadoValue.setValue(e.target.value, {
        onlySelf: true
      })
    }

    get estadoValue(){
      return this.registerForm.get('estado_civil');
    }
    changeMoneda(e) {
      console.log(e.target.value);
      this.monedaValue.setValue(e.target.value, {
        onlySelf: true
      })
    }

    get monedaValue(){
      return this.registerForm.get('moneda');
    }

     
  
    constructor(public alertService: AlertService,private ngWizardService: NgWizardService, private router:Router,private service: CanalesService,private formBuilder: FormBuilder,private location: Location) {
      
      this.registerForm = this.formBuilder.group({
        
          tipoprestamo: ['1', [Validators.required]],
        
        
          nombres: ['', [Validators.required,Validators.maxLength(255)]],
        primer_apellido: ['', [Validators.required,Validators.maxLength(255)]],
        telefono: ['', [Validators.required,Validators.maxLength(20),Validators.pattern("^[0-9]*$")]],
        celular_whatsapp: ['', [Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
        correo: ['', [Validators.required, Validators.email]],
        direccion: ['', [Validators.required,Validators.maxLength(255)]],
        estado_civil: ['', [Validators.required,Validators.maxLength(2)]],
        fecha_nacimiento: ['', Validators.required],
        profesion:['',Validators.maxLength(255)],
        
        
        monto: ['', [Validators.required,Validators.pattern("^[0-9]*$"),]],
        moneda: ['', Validators.required],
        proposito: ['', [Validators.required,Validators.minLength(50)]],
        
        
        
        
        

        //recaptcha: ['', Validators.required]
      });
     }
  
    ngOnInit() {
  
    }
    // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  checkValidation(){
    return this.registerForm.valid;
  }
  onSubmit(){
    this.submitted =true;
    if (this.registerForm.valid) {
      
      this.model.proposito = this.registerForm.controls.proposito.value;
      this.model.monto=this.registerForm.controls.monto.value;
      this.model.primer_apellido=this.registerForm.controls.nombres.value;
      this.model.nombres=this.registerForm.controls.primer_apellido.value;
      this.model.fecha_nacimiento=this.registerForm.controls.fecha_nacimiento.value;
      this.model.telefono=this.registerForm.controls.telefono.value;
      this.model.celular_whatsapp=this.registerForm.controls.celular_whatsapp.value;
      this.model.correo= this.registerForm.controls.correo.value;
      this.model.estado_civil=this.registerForm.controls.estado_civil.value;
      this.model.direccion=this.registerForm.controls.direccion.value;
      this.model.profesion=this.registerForm.controls.profesion.value;
      this.model.moneda=this.registerForm.controls.moneda.value;
      if (this.registerForm.controls.tipoprestamo.value == 'personal') this.model.m_personal='1';
      if (this.registerForm.controls.tipoprestamo.value == 'negocio') this.model.m_negocio='1';
      if (this.registerForm.controls.tipoprestamo.value == 'hipotecario') this.model.m_hipotecario='1';
      if (this.registerForm.controls.tipoprestamo.value == 'vehiculo') this.model.m_vehiculo='1';
      if (this.registerForm.controls.tipoprestamo.value == 'libre_disponibilidad') this.model.m_libre_disponibilidad='1';
     
     
     
       
      return this.service.datosPrecreditoForm(this.model).subscribe(
        data =>{ 
          this.model = data; this.exito=true;
         this.registerForm.reset();
         this.wizard.reset();

        this.alertService.success('La solicitud ha sido registrada con exito!!',this.options);
        },
        error =>{   
          this.exito=false;
          //console.log(error);
          /*let errorData = JSON.parse(error).errors;
          // iterate the keys in errors
         for(let key in errorData) {
           // if key has nested "errors", get and set the error message, else set null
             this.registerForm.controls[key].setErrors({'error':true});
         }*/
          this.alertService.error('Lo sentimos, No pudo registrase la solicitud, revise todos los campos requeridos o Intentelo nuevamente.',this.options);
        }, 
         
      );
   }
    

    
  }
  gotoHome(){
    return this.router.navigate(['/']);
  }
    
    showPreviousStep(event?: Event) {
      this.ngWizardService.previous();
    }
   
    showNextStep(event?: Event) {

      this.ngWizardService.next();
       
      
    }
   
    resetWizard(event?: Event) {
      this.ngWizardService.reset();
    }
   
    setTheme(theme: THEME) {
      this.ngWizardService.theme(theme);
    }
   
    stepChanged(args: StepChangedArgs) {
    //console.log(args.step);
    }

    public canExitStep1: (MovingDirection) => boolean = (direction) => {

      if (this.f.tipoprestamo.valid)
        return true;
       else{
         this.f.tipoprestamo.setErrors({required:true});
         this.f.tipoprestamo.markAsDirty();
         return false;
       }
        
      
    };

    
    public canExitStep2: (MovingDirection) => boolean = (direction) => {

      if (this.f.nombres.valid && 
         this.f.primer_apellido.valid &&
         this.f.telefono.valid &&
         this.f.celular_whatsapp.valid &&
         this.f.correo.valid &&
         this.f.direccion.valid &&
         this.f.estado_civil.valid &&
         this.f.fecha_nacimiento.valid &&
         this.f.profesion.valid 
        
        )
        return true;
       else{

        if (!this.f.nombres.valid) {this.f.nombres.setErrors({invalid:true});this.f.nombres.markAsDirty();}
        if (!this.f.primer_apellido.valid) {this.f.primer_apellido.setErrors({invalid:true});this.f.primer_apellido.markAsDirty();}
        if (!this.f.telefono.valid) {this.f.telefono.setErrors({invalid:true});this.f.telefono.markAsDirty();}
        if (!this.f.celular_whatsapp.valid) {this.f.celular_whatsapp.setErrors({invalid:true});this.f.celular_whatsapp.markAsDirty();}
        if (!this.f.correo.valid) {this.f.correo.setErrors({invalid:true});this.f.correo.markAsDirty();}
        if (!this.f.direccion.valid) {this.f.direccion.setErrors({invalid:true});this.f.direccion.markAsDirty();}
        if (!this.f.estado_civil.valid) {this.f.estado_civil.setErrors({invalid:true});this.f.estado_civil.markAsDirty();}
        if (!this.f.fecha_nacimiento.valid) {this.f.fecha_nacimiento.setErrors({invalid:true});this.f.fecha_nacimiento.markAsDirty();}
        if (!this.f.profesion.valid) {this.f.profesion.setErrors({maxLength:true});this.f.profesion.markAsDirty();}

         return false;
       }
        
      
    };
    nextStepWizard(){
      this.wizard.goToStep(1);
      //this.wizard.goToNextStep();
      console.log("boton precionado");
    }
  
  }