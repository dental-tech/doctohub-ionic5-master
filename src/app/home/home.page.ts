import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
location: string = "n1";
  constructor(private route: Router,  @Inject(APP_CONFIG) public config: AppConfig,) { }

  ngOnInit() {
  }
    
  finddoctor() {
    this.route.navigate(['./finddoctor']);
  }  
  doctroslist() {
    this.route.navigate(['./doctroslist']);
  } 
  lab() {
    this.route.navigate(['./lab']);
  }   
  medical() {
    this.route.navigate(['./medical']);
  } 
  buyAppAction() {
    window.open("https://bit.ly/cc2_DoctoHub", '_system', 'location=no');
  } 
}
