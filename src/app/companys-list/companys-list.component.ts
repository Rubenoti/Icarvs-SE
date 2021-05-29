import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companys-list',
  templateUrl: './companys-list.component.html',
  styleUrls: ['./companys-list.component.scss'],
})
export class CompanysListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  goToHome() {
    this.router.navigate(['/']);
  }
}
