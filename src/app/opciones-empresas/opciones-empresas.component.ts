import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones-empresas',
  templateUrl: './opciones-empresas.component.html',
  styleUrls: ['./opciones-empresas.component.scss'],
})
export class OpcionesEmpresasComponent implements OnInit {
  showCups = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  hayElectricidad() {
    this.router.navigate(['/Opciones-empresas']);
  }

  changeCheckbox(evento: any) {
    this.showCups = evento.target.checked;
  }
}
