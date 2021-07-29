import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.page.html',
  styleUrls: ['./addfeedback.page.scss'],
})
export class AddfeedbackPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
 tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  } 
}
