import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specilities',
  templateUrl: './specilities.page.html',
  styleUrls: ['./specilities.page.scss'],
})
export class SpecilitiesPage implements OnInit {
 location: string = "n1";
  constructor(private route: Router) { }

  ngOnInit() {
  }

   doctroslist() {
    this.route.navigate(['./doctroslist']);
  } 
}
