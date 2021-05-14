import { Router, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hideMenu = false;

  constructor(private router: Router) {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        console.log(route.url);

        if (
          route.url.includes('Conocenos') ||
          route.url.includes('Sobre-nosotros') ||
          route.url.includes('Energia-verde')
        ) {
          this.hideMenu = true;
        } else {
          this.hideMenu = false;
        }
      }
    });
  }
}
