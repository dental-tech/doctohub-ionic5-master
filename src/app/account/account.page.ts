import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private route: Router, @Inject(APP_CONFIG) public config: AppConfig,) { }

  ngOnInit() {
  }

 settings() {
    this.route.navigate(['./settings']);
  }
 profile() {
    this.route.navigate(['./profile']);
  }
 myfeedbacks() {
    this.route.navigate(['./myfeedbacks']);
  }
 blogs() {
    this.route.navigate(['./blogs']);
  } 
 aboutus() {
    this.route.navigate(['./aboutus']);
  } 
 terms() {
    this.route.navigate(['./terms']);
  } 
 help() {
    this.route.navigate(['./help']);
  } 
 select_language() {
    this.route.navigate(['./select-language']);
  }  
  buyAppAction() {
    window.open("https://bit.ly/cc2_DoctoHub", '_system', 'location=no');
  }    
}
