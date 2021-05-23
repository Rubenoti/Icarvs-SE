import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Donde',
  templateUrl: './Donde.component.html',
  styleUrls: ['./Donde.component.scss'],
})
export class DondeComponent implements OnInit {
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {}
}
