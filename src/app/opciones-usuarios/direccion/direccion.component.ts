import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.scss'],
})
export class DireccionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  tiempo() {
    this.router.navigate(['/Opciones/Tiempo']);
  }
}
