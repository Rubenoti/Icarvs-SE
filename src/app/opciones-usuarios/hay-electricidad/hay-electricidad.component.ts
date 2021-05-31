import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hay-electricidad',
  templateUrl: './hay-electricidad.component.html',
  styleUrls: ['./hay-electricidad.component.scss'],
})
export class HayElectricidadComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  opcion1() {
    this.router.navigate(['/Opciones/Tiempo']);
    localStorage.setItem('hay-electricidad', 'Hay luz');
  }
  opcion2() {
    this.router.navigate(['/Opciones/Tiempo']);
    localStorage.setItem('hay-electricidad', 'No hay luz');
  }

  donde() {
    this.router.navigate(['/Opciones/Donde']);
  }
}
