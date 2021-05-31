import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Donde',
  templateUrl: './Donde.component.html',
  styleUrls: ['./Donde.component.scss'],
})
export class DondeComponent implements OnInit {
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {}

  opcion1() {
    this.router.navigate(['/Opciones/Hay-electricidad']);
    localStorage.setItem('Donde', 'Vivienda unifamiliar');
  }
  opcion2() {
    this.router.navigate(['/Opciones/Hay-electricidad']);
    localStorage.setItem('Donde', 'Comunidad de vecinos');
  }
  opcion3() {
    this.router.navigate(['/Opciones/Hay-electricidad']);
    localStorage.setItem('Donde', 'Piso');
  }
  opcion4() {
    this.router.navigate(['/Opciones/Hay-electricidad']);
    localStorage.setItem('Donde', 'Empresa o negocio');
  }
}
