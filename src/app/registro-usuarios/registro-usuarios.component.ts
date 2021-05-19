import { NoPreloading, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmedValidator } from '../registro-usuarios/validators';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.scss'],
})
export class RegistroUsuariosComponent implements OnInit {
  mForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.mForm = this.fb.group(
      {
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$'),
          ],
        ],
        pass: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(18),
          ],
        ],
        confirmPass: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(18),
          ],
        ],
      },
      { validator: confirmedValidator('pass', 'confirmPass') }
    );
  }

  get f(): any {
    return this.mForm.controls;
  }
  registrar() {
    console.log('Enviar formulario', this.f);
    console.log(this.f.email.value);

    if (!this.f.email.errors) {
      console.log('No hay errores en el email');
    }
    if (!this.f.pass.errors) {
      console.log('No hay errores en el pass');
    }
    if (!this.f.confirmPass.errors) {
      console.log('No hay errores en el confirmPass');
    }
    if (this.f.email.value && this.f.pass.value && this.f.confirmPass.value) {
      this.navigateToDashboard;
      console.log('Registro realizado');
    } else if (this.f.email.value && this.f.pass.value) {
      this.navigateToRegister;
      console.log('Login realizado');
    } else if (this.f.email.value) {
      this.resetPass;
      console.log('Reinicio realizado');
    }
    if (this.mForm.invalid) {
      console.log('Error en el formulario');
      return;
    }
  }
  // si se cumple el primer if te lleva a la dashboard //
  navigateToDashboard() {
    this.router.navigate(['/Panel']);
  }
  // si se cumple el segundo if te lleva a los formularios de eleccion //
  navigateToRegister() {
    this.router.navigate(['/Opciones']);
  }
  // si se cumple el tercer if actualiza la base de datos//
  resetPass() {}

  ngOnInit() {}
}
