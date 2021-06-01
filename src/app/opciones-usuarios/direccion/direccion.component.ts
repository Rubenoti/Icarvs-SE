import { NotifierService } from 'angular-notifier';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.scss'],
})
export class DireccionComponent implements OnInit {
  showCups = false;
  nForm: FormGroup;
  rForm: FormGroup;
  isSent = false;
  isSent2 = false;

  // localidad = document.getElementById('floatingInput');
  // provincia = document.getElementById('fotingProvince');
  // CodigoPostal = document.getElementById('floatingCP');
  // calle = document.getElementById('floatingStreet');
  // numero = document.getElementById('floatingNum');
  // puerta = document.getElementById('floatingDoor');

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private notifierService: NotifierService
  ) {
    this.nForm = this.fb.group({
      ciudad: ['', [Validators.required, Validators.minLength(2)]],
      provincia: ['', [Validators.required, Validators.minLength(2)]],
      cp: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      calle: ['', [Validators.required, Validators.minLength(2)]],
      num: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.maxLength(3),
        ],
      ],
      puerta: ['', [Validators.required, Validators.minLength(1)]],
    });

    this.rForm = this.fb.group({
      cups: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.minLength(20),
          Validators.maxLength(22),
        ],
      ],
    });
  }

  get f(): any {
    return this.nForm.controls;
  }

  get cupsForm(): any {
    return this.rForm.controls;
  }

  validarDireccion() {
    console.log('Enviar formulario', this.f);
    this.isSent = true;
    const adress = this.nForm.value;
    localStorage.setItem('dirección', JSON.stringify(adress));
    console.log(this.f.ciudad.value);
    if (
      !this.f.ciudad.errors &&
      !this.f.provincia.errors &&
      !this.f.cp.errors &&
      !this.f.calle.errors &&
      !this.f.num.errors &&
      !this.f.puerta.errors
    ) {
      console.log('Todo OK');
    } else {
      console.log('Error');
    }
  }

  validarCups() {
    console.log('Enviar formulario', this.cupsForm);
    this.isSent2 = true;
    const cup = this.cupsForm.cups.value;
    localStorage.setItem('CUPS', cup);
    console.log(cup);
    if (this.cupsForm.cups.errors) {
      console.log('Error');
    } else {
      console.log('Formulario enviado');
    }
  }

  ngOnInit() {}

  goToLogin() {
    this.router.navigate(['/registro']);
  }

  registrarDireccion() {
    if (this.nForm.invalid) {
      console.log('Error en el formulario');
      return;
    }
    console.log('Botón', this.nForm);
  }

  registrarCups() {
    if (this.rForm.invalid) {
      console.log('Error en el formulario');
      return;
    }
    console.log('Botón', this.rForm);
  }

  hayElectricidad() {
    this.router.navigate(['/Opciones/Tiempo']);
  }

  changeCheckbox(evento: any) {
    this.showCups = evento.target.checked;
  }
}
