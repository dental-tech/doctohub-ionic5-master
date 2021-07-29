import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
 login: string = "signin";
  constructor(private navCtrl: NavController,private route: Router) { }

  ngOnInit() {
  }

forgotpassword() {
    this.route.navigate(['./forgotpassword']);
  } 
 location() {
    this.navCtrl.navigateRoot(['./location']);
  } 
}
