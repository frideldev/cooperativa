import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { Router } from '@angular/router';
import { CanalesService } from '../canales.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {Location} from '@angular/common';
//import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit {
  myOptions = {
    'placement': 'left',
    'theme': 'light'
  };

  model : Contacto ={
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

  constructor(private router:Router,private service: CanalesService,private formBuilder: FormBuilder,private location: Location) {

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
      recaptcha: ['', Validators.required]
    });
  }

  ngOnInit() {


  }


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted =true;
    if (this.registerForm.valid) {

      this.model.nombre = this.registerForm.controls.name.value;
      this.model.email= this.registerForm.controls.email.value;
      this.model.telefono = this.registerForm.controls.phone.value;
      this.model.mensaje = this.registerForm.controls.message.value;

      return this.service.contactForm(this.model).subscribe(
        data =>{ this.model = data; this.exito=true;
        },
        error =>{ this.error = error; this.exito=false;}

      );
   }



  }
  gotoHome(){
    return this.router.navigate(['/']);
  }
}
