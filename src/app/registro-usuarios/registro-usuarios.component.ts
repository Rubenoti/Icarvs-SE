import { Router } from '@angular/router';
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
  isSent = false;
  showLogin = true;
  showRegister = false;
  showReset = false;

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
    this.isSent = true;
    console.log(this.f.email.value);

    if (
      this.showRegister &&
      !this.f.email.errors &&
      !this.f.pass.errors &&
      !this.f.confirmPass.errors
    ) {
      this.navigateToRegister();
      console.log('Registro realizado');
    } else if (this.showLogin && !this.f.email.errors && !this.f.pass.errors) {
      this.navigateToDashboard();
      console.log('Login realizado');
    } else if (this.showReset && !this.f.email.errors) {
      this.resetPass();
      console.log('Reinicio realizado');
    }
    if (this.mForm.invalid) {
      console.log('Error en el formulario');
      return;
    }
  }

  navigateToDashboard() {
    this.router.navigate(['/Panel']);
  }

  navigateToRegister() {
    this.router.navigate(['/Opciones']);
  }

  resetPass() {}

  mostrarLogin() {
    this.showLogin = true;
    this.showRegister = false;
    this.showReset = false;
    console.log('Estás en login');
  }

  mostrarReset() {
    this.showLogin = false;
    this.showRegister = false;
    this.showReset = true;
    console.log('Estás en reset');
  }

  mostrarRegister() {
    this.showLogin = false;
    this.showRegister = true;
    this.showReset = false;
    console.log('Estás en register');
  }

  ngOnInit() {}
}
