import { Component, OnInit } from '@angular/core';
import { NgWizardConfig, THEME, StepChangedArgs, NgWizardService} from 'ng-wizard';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import {Location} from '@angular/common';
import { datosPrecredito } from './datosPrecredito';


@Component({
  selector: 'app-precredito',
  templateUrl: './precredito.component.html',
  styleUrls: ['./precredito.component.css']
})
export class PrecreditoComponent implements OnInit {

  model : datosPrecredito ={
    nombre: '',
    email:'',
    mensaje:'',
  };

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
    toolbarSettings: {
      toolbarExtraButtons: [
        {text: 'Enviar', class: 'btn btn-info', event:()=> {alert("Finalizar");}}
      ]
    }
  };
  myOptions = {
    'placement': 'top',
    'theme': 'light'
  };

  constructor(private ngWizardService: NgWizardService, private formBuilder: FormBuilder) {
    
   }

  ngOnInit() {
  
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],            
      lastName: ['', Validators.required, Validators.email],
      surname: ['', Validators.maxLength(255)],
      birthday: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(7)]],
      whatsapp: ['', [Validators.required, Validators.minLength(7)]],
      email: ['', [Validators.required, Validators.email]],
      maritalStatus:['', Validators.required],
      address:['', Validators.required],
      occupation:['', Validators.required],
      money:['', Validators.required],
      purpose:['', [Validators.required,Validators.maxLength(255)]],
    });
  }
  
  get f() { return this.registerForm.controls; }
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
    console.log(args.step);
  }

}
