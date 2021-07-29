import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finddoctor',
  templateUrl: './finddoctor.page.html',
  styleUrls: ['./finddoctor.page.scss'],
})
export class FinddoctorPage implements OnInit {
location: string = "n1";
  constructor(private route: Router) { }

  ngOnInit() {
  }

  specilities() {
    this.route.navigate(['./specilities']);
  } 
}
