import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.scss'],
})
export class TiempoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  opcion1() {
    this.router.navigate(['/Opciones/Direccion']);
    localStorage.setItem('tiempo', 'Mas de un año');
  }
  opcion2() {
    this.router.navigate(['/Opciones/Direccion']);
    localStorage.setItem('tiempo', 'Menos de un año');
  }

  hayElectricidad() {
    this.router.navigate(['/Opciones/Hay-electricidad']);
  }
}
