import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.scss'],
})
export class DireccionComponent implements OnInit {
  showCups = false;
  localidad = document.getElementById('floatingInput');
  provincia = document.getElementById('fotingProvince');
  CodigoPostal = document.getElementById('floatingCP');
  calle = document.getElementById('floatingStreet');
  numero = document.getElementById('floatingNum');
  puerta = document.getElementById('floatingDoor');

  constructor(private router: Router) {}

  ngOnInit() {}
  guardarDatos() {
    //localStorage.setItem('localidad');
  }

  hayElectricidad() {
    this.router.navigate(['/Opciones/Tiempo']);
  }

  changeCheckbox(evento: any) {
    this.showCups = evento.target.checked;
  }
}
