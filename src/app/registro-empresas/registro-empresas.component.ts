import { CompanyService } from './../services/company.service';
import { Login } from './../models/login';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmedValidator } from '../registro-empresas/validators';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-registro-empresas',
  templateUrl: './registro-empresas.component.html',
  styleUrls: ['./registro-empresas.component.scss'],
})
export class RegistroEmpresasComponent implements OnInit {
  mForm: FormGroup;
  isSent = false;
  showLogin = true;
  showRegister = false;
  showReset = false;
  loginSumbit = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private notifierService: NotifierService,
    private companyService: CompanyService
  ) {
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
    if (this.showRegister) {
      if (
        !this.f.email.errors &&
        !this.f.pass.errors &&
        !this.f.confirmPass.errors
      ) {
        this.registroUser();
      } else {
        this.notifierService.notify(
          'error',
          'Comprueba que todos tus datos son correctos'
        );
      }
    }

    if (this.showLogin) {
      if (!this.f.email.errors && !this.f.pass.errors) {
        this.loginUser();
      } else {
        this.notifierService.notify(
          'error',
          'Email o contrase??a son incorrectos'
        );
      }
    }

    if (this.showReset) {
      if (!this.f.email.errors) {
        this.resetPass();
      } else {
        this.notifierService.notify('error', 'Email incorrecto');
      }
    }
  }

  navigateToDashboard() {
    this.router.navigate(['/Panel']);
  }

  navigateToRegister() {
    this.router.navigate(['/Opciones']);
  }

  goToUsers() {
    this.router.navigate(['/registro']);
  }

  resetPass() {}

  mostrarLogin() {
    this.showLogin = true;
    this.showRegister = false;
    this.showReset = false;
    console.log('Est??s en login');
  }

  mostrarReset() {
    this.showLogin = false;
    this.showRegister = false;
    this.showReset = true;
    console.log('Est??s en reset');
  }

  mostrarRegister() {
    this.showLogin = false;
    this.showRegister = true;
    this.showReset = false;
    console.log('Est??s en register');
  }

  ngOnInit() {}

  registroUser() {
    const user: Login = new Login();
    user.email = this.f.email.value;
    user.pass = this.f.pass.value;
    this.companyService.RegistroEmpresa(user).subscribe(
      (data) => {
        console.log(data);
        location.reload();
      },
      (error) => {
        console.log('Error:', error);
        console.log(error.status);
        if (error.error == 'usuario ya existe') {
          this.notifierService.notify('error', 'Email ya existe');
        }
      }
    );
  }

  loginUser() {
    const login: Login = new Login();
    login.email = this.f.email.value;
    login.pass = this.f.pass.value;
    this.companyService.loginEmpresa(login).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.access_token);
        this.router.navigate(['/Opciones-empresas']);
        console.log(data);
      },
      (error) => {
        console.log('Error:', error);
        if (error.error == 'Credenciales incorrectas') {
          this.notifierService.notify('error', 'Usuario no encontrado');
        }
      }
    );
  }
  goToHome() {
    this.router.navigate(['/']);
  }
}
