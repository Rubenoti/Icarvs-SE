import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones-usuarios',
  templateUrl: './opciones-usuarios.component.html',
  styleUrls: ['./opciones-usuarios.component.scss'],
})
export class OpcionesUsuariosComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
      }
    });
  }
}
