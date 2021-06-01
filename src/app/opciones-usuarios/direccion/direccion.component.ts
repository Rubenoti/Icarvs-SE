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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private fg: FormGroup
  ) {}

  ngOnInit() {}

  hayElectricidad() {
    this.router.navigate(['/Opciones/Tiempo']);
  }

  changeCheckbox(evento: any) {
    this.showCups = evento.target.checked;
  }
}
