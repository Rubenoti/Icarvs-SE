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

  direccion() {
    this.router.navigate(['/Opciones/Direccion']);
  }

  hayElectricidad() {
    this.router.navigate(['/Opciones/Hay-electricidad']);
  }
}
