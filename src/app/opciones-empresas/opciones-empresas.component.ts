import { NotifierService } from 'angular-notifier';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones-empresas',
  templateUrl: './opciones-empresas.component.html',
  styleUrls: ['./opciones-empresas.component.scss'],
})
export class OpcionesEmpresasComponent implements OnInit {
  showCups = false;
  cForm: FormGroup;
  iForm: FormGroup;
  isSent = false;
  isSent2 = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private notifierservice: NotifierService
  ) {
    this.cForm = this.fb.group({
      nombreCompania: ['', [Validators.required, Validators.minLength(2)]],
      cif: ['', [Validators.required, Validators.minLength(2)]],
      ubicacionCompania: ['', [Validators.required, Validators.minLength(2)]],
      tlfComercial: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.minLength(9),
          Validators.maxLength(9),
        ],
      ],
      tlfAtencion: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.minLength(9),
          Validators.maxLength(9),
        ],
      ],
      web: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern(
            '[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)'
          ),
        ],
      ],
    });

    this.iForm = this.fb.group({
      nombreInstalador: ['', [Validators.required, Validators.minLength(2)]],
      dni: ['', [Validators.required, Validators.minLength(2)]],
      ubicacionInstalador: ['', [Validators.required, Validators.minLength(2)]],
      tlfContacto: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.minLength(9),
          Validators.maxLength(9),
        ],
      ],
    });
  }
  get c(): any {
    return this.cForm.controls;
  }

  get i(): any {
    return this.iForm.controls;
  }

  validarCompania() {
    console.log('Enviar formulario', this.c);
    this.isSent = true;
    const company = this.cForm.value;
    localStorage.setItem('Compañía', JSON.stringify(company));
    console.log(this.c.nombreCompania.value);
    if (
      !this.c.nombreCompania.errors &&
      !this.c.cif.errors &&
      !this.c.ubicacionCompania.errors &&
      !this.c.tlfComercial.errors &&
      !this.c.tlfAtencion.errors &&
      !this.c.web.errors
    ) {
      console.log('Todo OK');
    } else {
      console.log('Error');
    }
  }

  validarInstalador() {
    console.log('Enviar formulario', this.i);
    this.isSent = true;
    const instalator = this.iForm.value;
    localStorage.setItem('Instalador', JSON.stringify(instalator));
    console.log(this.i.nombreInstalador.value);
    if (
      !this.i.nombreInstalador.errors &&
      !this.i.dni.errors &&
      !this.i.tlfContacto.errors &&
      !this.i.ubicacionInstalador.errors
    ) {
      console.log('Todo OK');
    } else {
      console.log('Error');
    }
  }

  ngOnInit() {}

  registrarInstalador() {
    if (this.iForm.invalid) {
      console.log('Error en el formulario');
      return;
    }
    console.log('Botón', this.iForm);
  }

  registrarCompania() {
    if (this.cForm.invalid) {
      console.log('Error en el formulario');
      return;
    }
    console.log('Botón', this.cForm);
  }

  hayElectricidad() {
    this.router.navigate(['/Opciones-empresas']);
  }

  goToLogin() {
    this.router.navigate(['/registro']);
  }

  changeCheckbox(evento: any) {
    this.showCups = evento.target.checked;
  }
}
