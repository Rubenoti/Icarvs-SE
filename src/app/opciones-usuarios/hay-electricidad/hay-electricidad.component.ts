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

  hayElectricidad() {
    this.router.navigate(['/Opciones/Tiempo']);
  }

  donde() {
    this.router.navigate(['/Opciones/Donde']);
  }
}
