import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contacto: FormGroup;
  submitted = false;
  titulo = 'Atención al Cliente';

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
          this.submitted = true;
  
          if (this.contacto.invalid) {
              return;
          }
  
          alert('Mensaje Enviado !')
  }
  get f() { return this.contacto.controls; }

  ngOnInit() {
    this.contacto = this.formBuilder.group({
    nya: ['', Validators.required],            
    email: ['', [Validators.required, Validators.email]],
    asunto: ['', Validators.required],
    postre: ['', Validators.required],
    mensaje: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

}
