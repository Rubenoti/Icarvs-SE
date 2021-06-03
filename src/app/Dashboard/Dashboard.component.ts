import { Profile } from './../models/profile';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  profile: Array<Profile> = [];

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.userService.getUser().subscribe(
      (data) => {
        console.log(data);
        this.profile = data;
      },
      (error) => {
        console.log('Error:', error);
        console.log(error.status);
      }
    );
  }

  goToHome() {
    this.router.navigate(['/']);
  }
  goToCompList() {
    this.router.navigate(['/lista-companias']);
  }

  goToProfmpList() {
    this.router.navigate(['/lista-instaladores']);
  }
}
